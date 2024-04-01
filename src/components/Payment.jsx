// import React, { useState } from 'react';
// import { Button, Form, Input, InputNumber, Spin, Alert } from 'antd';
// import { doc, getDoc } from 'firebase/firestore';
// import { db } from './FirebaseConfig'; // Make sure this path is correct

// const { Search } = Input;

// const layout = {
//     labelCol: { span: 8 },
//     wrapperCol: { span: 16 },
// };

// const validateMessages = {
//     required: '${label} is required!',
//     types: {
//         email: '${label} is not a valid email!',
//         number: '${label} is not a valid number!',
//     },
//     number: {
//         range: '${label} must be between ${min} and ${max}',
//     },
// };

// const Payment = () => {
//     const [form] = Form.useForm();
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const onFinish = (values) => {
//         console.log(values);
//     };

//     const onSearch = async (nic) => {
//         setLoading(true);
//         setError('');
//         try {
//             const docRef = doc(db, 'DRIVER DETAILS', nic);
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 // Assuming the document's field names in Firestore match the form's field names
//                 form.setFieldsValue({ user: docSnap.data() });
//             } else {
//                 setError('No details found for the provided NIC.');
//                 form.resetFields();
//             }
//         } catch (error) {
//             console.error("Error fetching document:", error);
//             setError('Failed to fetch details. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div style={{ maxWidth: 600, margin: 'auto' }}>
//             <Spin spinning={loading} delay={500}>
//                 <Search
//                     placeholder="Input NIC here"
//                     allowClear
//                     enterButton="Search"
//                     size="large"
//                     onSearch={onSearch}
//                     style={{ marginBottom: 20 }}
//                 />
//                 {error && <Alert message={error} type="error" showIcon style={{ marginBottom: 20 }} />}
//                 <Form
//                     form={form}
//                     {...layout}
//                     name="nest-messages"
//                     onFinish={onFinish}
//                     validateMessages={validateMessages}
//                 >
//                     <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
//                         <Input />
//                     </Form.Item>
//                     <Form.Item name={['user', 'License Number']} label="License Number" rules={[{ required: true }]}>
//                         <Input />
//                     </Form.Item>
//                     <Form.Item name={['user', 'penalty cost']} label="Penalty Cost" rules={[{ required: true, type: 'number', min: 0 }]}>
//                         <InputNumber />
//                     </Form.Item>
//                     <Form.Item name={['user', 'penalty title']} label="Penalty Title" rules={[{ required: true }]}>
//                         <Input />
//                     </Form.Item>
//                     <Form.Item name={['user', 'penalty description']} label="Penalty Description" rules={[{ required: true }]}>
//                         <Input.TextArea />
//                     </Form.Item>
//                     <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//                         <Button type="default" htmlType="submit">
//                             Pay
//                         </Button>
//                     </Form.Item>
//                 </Form>
//             </Spin>
//         </div>
//     );
// };

// export default Payment;

import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Form, Input, InputNumber, Spin, Alert } from 'antd';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './FirebaseConfig'; // Confirm this path is correct

const { Search } = Input;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const Payment = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const onFinish = (values) => {
        console.log(values);
    };

    const onSearch = async (nic) => {
        setLoading(true);
        setError('');
        try {
            const docRef = doc(db, 'DRIVER DETAILS', nic); // Check collection name is exactly 'DRIVER DETAILS'
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
              const userData = docSnap.data();
              const fullName = `${userData.firstName} ${userData.lastName}`; // Combining firstName and lastName
              form.setFieldsValue({
                  user: {
                      name: fullName, // Using the combined name
                      'License Number': userData.licenseNumber,
                      'penalty cost': userData.penaltyCost,
                      // 'penalty title': userData.penaltyTitle,
                      'penalty description': userData.penaltyDescription,
                  },
                });
            } else {
                setError('No details found for the provided NIC.');
                form.resetFields();
            }
        } catch (error) {
            console.error("Error fetching document:", error);
            setError('Failed to fetch details. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: 600, margin: 'auto' }}>
            <Spin spinning={loading} delay={500}>
                <Search
                    placeholder="Input NIC here"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                    style={{ marginBottom: 20 }}
                />
                {error && <Alert message={error} type="error" showIcon style={{ marginBottom: 20 }} />}
                <Form
                    form={form}
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    validateMessages={validateMessages}
                >
                    <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'License Number']} label="License Number" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name={['user', 'penalty cost']} label="Penalty Cost" rules={[{ required: true, type: 'number', min: 0 }]}>
                        <InputNumber />
                    </Form.Item>
                    {/* <Form.Item name={['user', 'penalty title']} label="Penalty Title" rules={[{ required: true }]}>
                        <Input />
                    </Form.Item> */}
                    <Form.Item name={['user', 'penalty description']} label="Penalty Description" rules={[{ required: true }]}>
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="default" htmlType="submit">
                            Pay
                        </Button>
                    </Form.Item>
                </Form>
            </Spin>
        </div>
    );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<Payment />);

export default Payment;

