import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsByName } from "../../Redux/Actions/actions";
import "./Search.css";

export const Search = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    dispatch(getPokemonsByName(e));
  };

  const handleClick = () => {
    setActive(!active);
  };

  const handleChange = (e) => {
    let { value } = e.target;
    setName(value);
    handleInputChange(value);
  };

  const handleClear = () => {
    setName("");
  };

  return (
    <div className={`search ${active && "active"}`}>
      <div className="icon" onClick={handleClick}></div>
      <div className="input">
        <input
          type="text"
          placeholder="Search a Pokemon"
          id="mysearch"
          value={name}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <span className="clear" onClick={handleClear}></span>
    </div>
  );
};
