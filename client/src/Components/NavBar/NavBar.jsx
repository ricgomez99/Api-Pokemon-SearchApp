import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Navbar">
      <span className="logo">
        <img src="images/mega-ball.png" alt="logo" />
      </span>
      <div className={`items ${isOpen && "open"}`}>
        <Link to="/" className="link">
          HOME
        </Link>
        <Link to="/main" className="link">
          POKEMONS
        </Link>
        <Link to="/contact" className="link">
          ABOUT
        </Link>
      </div>
      <div className={`toggle ${isOpen && "open"}`} onClick={handleClick}>
        <div className="bar"></div>
      </div>
    </div>
  );
};
