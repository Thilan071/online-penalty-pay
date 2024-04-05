// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import { Button, Form, Input, InputNumber, Spin, Alert } from 'antd';
// import { doc, getDoc, setDoc } from 'firebase/firestore';
// import { db } from './FirebaseConfig';

// const { Search } = Input;

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };

// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not a valid email!',
//     number: '${label} is not a valid number!',
//   },
//   number: {
//     range: '${label} must be between ${min} and ${max}',
//   },
// };

// const Payment = () => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [nic, setNic] = useState('');

//   const savePaymentStatus = async (nic, paymentDetails) => {
//     setLoading(true);
//     setError('');
//     try {
//       // Assuming you want to use the NIC as the document ID in the 'payment status' collection
//       const paymentStatusRef = doc(db, 'payment status', nic);
//       await setDoc(paymentStatusRef, paymentDetails);
//       alert('Payment status saved successfully!');
//     } catch (error) {
//       console.error("Error saving payment status:", error);
//       setError('Failed to save payment status. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onFinish = async (values) => {
//     console.log(values);
//     // Here, add additional payment details as needed
//     const paymentDetails = {
//       nic,
//       paymentStatus: true, // Assuming true represents a successful payment
//       // Add more details as needed (e.g., paymentDate, amount)
//     };
//     await savePaymentStatus(nic, paymentDetails);
//   };

//   const onSearch = async (searchedNic) => {
//     setLoading(true);
//     setError('');
//     setNic(searchedNic);
//     try {
//       const docRef = doc(db, 'DRIVER DETAILS', searchedNic);
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         const userData = docSnap.data();
//         form.setFieldsValue({
//           user: {
//             name: `${userData.firstName} ${userData.lastName}`,
//             'License Number': userData.licenseNumber,
//             'penalty cost': userData.penaltyCost,
//             'penalty description': userData.penaltyDescription,
//           },
//         });
//       } else {
//         setError('No details found for the provided NIC.');
//         form.resetFields();
//       }
//     } catch (error) {
//       console.error("Error fetching document:", error);
//       setError('Failed to fetch details. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: 'auto' }}>
//       <Spin spinning={loading} delay={500}>
//         <Search
//           placeholder="Input NIC here"
//           allowClear
//           enterButton="Search"
//           size="large"
//           onSearch={onSearch}
//           style={{ marginBottom: 20 }}
//         />
//         {error && <Alert message={error} type="error" showIcon style={{ marginBottom: 20 }} />}
//         <Form
//           form={form}
//           {...layout}
//           name="nest-messages"
//           onFinish={onFinish}
//           validateMessages={validateMessages}
//         >
//           <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item name={['user', 'License Number']} label="License Number" rules={[{ required: true }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item name={['user', 'penalty cost']} label="Penalty Cost" rules={[{ required: true, type: 'number', min: 0 }]}>
//             <InputNumber />
//           </Form.Item>
//           <Form.Item name={['user', 'penalty description']} label="Penalty Description" rules={[{ required: true }]}>
//             <Input.TextArea />
//           </Form.Item>
//           <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//             <Button type="default" htmlType="submit">
//               Pay
//             </Button>
//           </Form.Item>
//         </Form>
//       </Spin>
//     </div>
//   );
// };

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<Payment />);

// export default Payment;






// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';
// import { Button, Form, Input, InputNumber, Spin, Alert } from 'antd';
// import { doc, getDoc, updateDoc } from 'firebase/firestore'; // Import updateDoc here
// import { db } from './FirebaseConfig';

// const { Search } = Input;

// const layout = {
//   labelCol: { span: 8 },
//   wrapperCol: { span: 16 },
// };

// const validateMessages = {
//   required: '${label} is required!',
//   types: {
//     email: '${label} is not a valid email!',
//     number: '${label} is not a valid number!',
//   },
//   number: {
//     range: '${label} must be between ${min} and ${max}',
//   },
// };

// const Payment = () => {
//   const [form] = Form.useForm();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [nic, setNic] = useState('');

//   const updateDriverDetailsWithPayment = async (nic, paymentStatus) => {
//     try {
//       const driverRef = doc(db, 'DRIVER DETAILS', nic);
//       await updateDoc(driverRef, { paymentStatus: paymentStatus });
//       console.log('Payment status updated successfully.');
//     } catch (error) {
//       console.error('Error updating payment status:', error);
//       throw error; // Rethrow to be caught in the calling function
//     }
//   };

//   const onFinish = async (values) => {
//     console.log(values);
//     const paymentDetails = {
//       nic,
//       paymentStatus: true, // Assuming true represents a successful payment
//       // You could add more payment details here (e.g., date, amount)
//     };
//     setLoading(true);
//     setError('');
//     try {
//       // Save payment status in DRIVER DETAILS
//       await updateDriverDetailsWithPayment(nic, paymentDetails.paymentStatus);
//       alert('Payment recorded successfully.');
//     } catch (error) {
//       setError('Failed to record payment. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onSearch = async (searchedNic) => {
//     setLoading(true);
//     setError('');
//     setNic(searchedNic);
//     try {
//       const docRef = doc(db, 'DRIVER DETAILS', searchedNic);
//       const docSnap = await getDoc(docRef);

//       if (docSnap.exists()) {
//         const userData = docSnap.data();
//         form.setFieldsValue({
//           user: {
//             name: `${userData.firstName} ${userData.lastName}`,
//             'License Number': userData.licenseNumber,
//             'penalty cost': userData.penaltyCost,
//             'penalty description': userData.penaltyDescription,
//           },
//         });
//       } else {
//         setError('No details found for the provided NIC.');
//         form.resetFields();
//       }
//     } catch (error) {
//       console.error("Error fetching document:", error);
//       setError('Failed to fetch details. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 600, margin: 'auto' }}>
//       <Spin spinning={loading} delay={500}>
//         <Search
//           placeholder="Input NIC here"
//           allowClear
//           enterButton="Search"
//           size="large"
//           onSearch={onSearch}
//           style={{ marginBottom: 20 }}
//         />
//         {error && <Alert message={error} type="error" showIcon style={{ marginBottom: 20 }} />}
//         <Form
//           form={form}
//           {...layout}
//           name="nest-messages"
//           onFinish={onFinish}
//           validateMessages={validateMessages}
//         >
//           <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item name={['user', 'License Number']} label="License Number" rules={[{ required: true }]}>
//             <Input />
//           </Form.Item>
//           <Form.Item name={['user', 'penalty cost']} label="Penalty Cost" rules={[{ required: true, type: 'number', min: 0 }]}>
//             <InputNumber />
//           </Form.Item>
//           <Form.Item name={['user', 'penalty description']} label="Penalty Description" rules={[{ required: true }]}>
//             <Input.TextArea />
//           </Form.Item>
//           <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
//             <Button type="default" htmlType="submit">
//               Pay
//             </Button>
//           </Form.Item>
//         </Form>
//       </Spin>
//     </div>
//   );
// };

// const container = document.getElementById('root');
// const root = ReactDOM.createRoot(container);
// root.render(<Payment />);


// export default Payment;











import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Button, Form, Input, InputNumber, Spin, Alert } from 'antd';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'; // Make sure to import setDoc here
import { db } from './FirebaseConfig';

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
  const [nic, setNic] = useState('');

  const onFinish = async (values) => {
    console.log(values);
    // Assume paymentDetails contains all necessary information about the payment
    const paymentDetails = {
      nic,
      paymentStatus: true, // true represents a successful payment
      // Include other payment details as necessary, such as date and amount
    };
    
    setLoading(true);
    setError('');

    try {
      // Update DRIVER DETAILS with the payment status
      const driverRef = doc(db, 'DRIVER DETAILS', nic);
      await updateDoc(driverRef, {
        paymentStatus: paymentDetails.paymentStatus,
        // You can add additional fields to update as necessary
      });

      // Additionally, save the payment information in the payment status collection
      // You can generate a unique ID for each payment or use a specific identifier
      // const paymentRef = doc(db, 'payment status', `payment_${nic}_${Date.now()}`);
      const paymentRef = doc(db, 'payment status', nic); // Generates a unique ID based on NIC and timestamp
      await setDoc(paymentRef, paymentDetails);

      alert('Payment recorded successfully.');
    } catch (error) {
      console.error("Error recording payment:", error);
      setError('Failed to record payment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const onSearch = async (searchedNic) => {
    setLoading(true);
    setError('');
    setNic(searchedNic);
    try {
      const docRef = doc(db, 'DRIVER DETAILS', searchedNic);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        form.setFieldsValue({
          user: {
            name: `${userData.firstName} ${userData.lastName}`,
            'License Number': userData.licenseNumber,
            'penalty cost': userData.penaltyCost,
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
