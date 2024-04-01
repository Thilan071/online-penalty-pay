// import Payment from "./components/Payment";
// import Destination from "./components/Destination";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Search from "./components/Search";
// import Selects from "./components/Selects";

 
// function App() {
//   return (
//     <div >
//      <Navbar/>
//      <Hero/>
//      <Destination/>
//      <Search/>
//      <Selects/>
//      <Footer/>

// {/* <Payment/> */}


   
//     </div>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Payment from "./components/Payment";
import Destination from "./components/Destination";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Selects from "./components/Selects";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={
            <>
                    <Navbar />

              <Hero />
              {/* <Destination /> */}
              {/* <Search /> */}
              <Selects />
              <Footer />
            </>
          } />
          <Route path="/payment" element={<Payment />} />
          {/* Add more routes as needed */}
        </Routes>
    </Router>
  );
}

export default App;
