import React from 'react'
import ReactDOM from "react-dom/client";
import Navbar from './components/navbar/navbar.jsx';
import Header from './components/header/header.jsx';
import Skills from './components/skills/skills.jsx';
import About from './components/about/about.jsx';
import Pricing from './components/pricing/pricing.jsx';
import Contact from './components/contact/contact.jsx';
import Footer from './components/footer/footer.jsx';
import './style.css'

const Index = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Skills />
      <About />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  )
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<Index />);
