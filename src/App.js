/*import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
/*import Nav from './Nav';*/
/*import Main from './Main';
import Footer from './Footer';
import './App.css';


function App() {
  return (
    <>
      <Header/>
      {/*<Nav/>*/ /*}
      <Main/>
      <Footer/>

    </>
  );
}

export default App;*/


import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ReservationForm from './ReservationForm'; 
import ConfirmedBooking from './ConfirmedBooking';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<ReservationForm />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
        
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
