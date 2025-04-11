import React from 'react'
import icon from '../../assets/icons/Britlex.svg';

const Navbar = () => {
  return (
    <div className='container navbar'>
        <a href="#" className="logo">
            <img src={icon} alt="logo" />
        </a>
        <ul>
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Skills</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Pricing</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
        <div className="btn">Let's Talk</div>
    </div>
  )
}

export default Navbar