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
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Adjusted for React Router v6
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';
import ReservationForm from './ReservationForm'; // If you have a separate route for reservations

function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<ReservationForm />} />
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
