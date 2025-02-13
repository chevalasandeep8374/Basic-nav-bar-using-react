/* eslint-disable react/jsx-no-undef */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import './App.css';


const Home =()=>(
    <h1> Welcome to Home page!</h1>
);
const About =()=>(
    <h1> This is About page!</h1>
);
const Carrer =()=>(
    <h1>This is Carrer Roadmap page!</h1>
);
const Mentorship =()=>(
  <h1> This is mentorship page!</h1>
);
const Job =()=>(
  <h1>This is job Portal page!</h1>
);
const Resources =()=>(
  <h1>This is job Resources page!</h1>
);
const Contact =()=>(
  <h1>This is job Contact Us page!</h1>
);
const Login =()=>(
  <h1>This is job Login/sign-up page!</h1>
);
const Privacy =()=>
(
 <h1>This is Privacy policy page!</h1>
);
const Terms =()=>
(
 <h1>This is Terms of Service page!</h1>
);
const NavBar =()=>(
  <nav>
    <Link className="link" to="/">Home</Link>
    <Link className="link" to="/about">About</Link>
    <Link className="link" to="/carrer">Carrer Roadmap</Link>
    <Link className="link" to="/mentorship">Mentorship</Link>
    <Link className="link" to="/job">Job Portal</Link>
    <Link className="link" to="/resources">Resources</Link>
    <Link className="link" to="/contact">Contact</Link>
    <Link className="link" to="/login">Login/Sign-up</Link>
    
  </nav>
);


const Footer = () => (
  <footer >
    <div className="foot">
      <a href="/privacy-policy" >
        Privacy Policy
      </a>
      <a href="/terms-of-service" >
        Terms of Service
      </a>
      <a href="/contact">
        Contact Us
      </a>
      <Link className="link" to="/privacy-policy"></Link>
    <Link className="link" to="/terms-of-service"></Link>
    </div>
    <div  className="foot2">
      <a
        href="https://facebook.com"
        target="_blank"
         rel="noopener noreferrer"
      >
        <FaFacebook size={20} />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter size={20} />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={20} />
      </a>
    </div>
  
  </footer>
);
const App = () =>(
  <Router>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/carrer" element={<Carrer/>}/>
      <Route path="/mentorship" element={<Mentorship/>}/>
      <Route path="/job" element={<Job/>}/>
      <Route path="/resources" element={<Resources/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/terms-of-service" element={<Terms/>}/>
      <Route path="/privacy-policy" element={<Privacy/>}/>
    </Routes>
    <Footer/>
  </Router>
);


export default App;
