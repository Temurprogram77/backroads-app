import React from 'react'
import ReactDOM from "react-dom/client";

const Index = () => {
  return (
    <div>
      <Navbar />
    </div>
  )
}

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<Index />);
