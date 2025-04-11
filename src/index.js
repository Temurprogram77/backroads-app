import React from 'react'
import ReactDOM from "react-dom/client";
import Navbar from './components/navbar/navbar';
import Header from './components/header/header';
import Skills from './components/skills/skills';
import About from './components/about/about';
import Pricing from './components/pricing/pricing';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

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
