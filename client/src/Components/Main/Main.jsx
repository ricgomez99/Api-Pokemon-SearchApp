import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPokemons,
  orderAscDesc,
  filterByTypes,
  getTypes,
  orderByAttack,
  filterInDatabase,
} from "../../Redux/Actions/actions";
import { Card } from "../Card/Card";
import { Pagination } from "../Paginate/Pagination";
import { Search } from "../Search/Search";
import { Link } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import "./Main.css";

export const Main = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const types = useSelector((state) => state.types);
  const currentPage = useSelector((state) => state.pageIndex);

  // console.log(pokemons);

  const [order, setOrder] = useState(true);
  const [orderAttack, setOrderAttack] = useState(true);

  const postsPerPage = 9;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = pokemons.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    dispatch(getPokemons());
    dispatch(getTypes());
  }, [dispatch]);

  const handleFilterTypes = (e) => {
    const { value } = e.target;
    dispatch(filterByTypes(value));
  };

  const handleSortOrder = (e) => {
    setOrder(!order);
    dispatch(orderAscDesc(order));
  };

  const handleSortAttack = (e) => {
    setOrderAttack(!orderAttack);
    dispatch(orderByAttack(orderAttack));
  };

  return (
    <div>
      <div className="search_bar">
        <Search />
        <div className="add_section">
          <Link to="/form">
            <button className="add_btn">
              <i className="fa-solid fa-plus"></i>
            </button>
          </Link>
        </div>
      </div>
      <div className="filters">
        <button className="filter_alpha" onClick={(e) => handleSortOrder(e)}>
          {order ? (
            <i className="fa-solid fa-arrow-up-a-z"></i>
          ) : (
            <i className="fa-solid fa-arrow-down-z-a"></i>
          )}
        </button>
        <div className="filter_order" onClick={(e) => handleSortAttack(e)}>
          {orderAttack ? (
            <i className="fa-solid fa-sort-up"></i>
          ) : (
            <i className="fa-solid fa-sort-down"></i>
          )}
        </div>

        <div>
          <select
            className="select_types"
            onChange={(e) => handleFilterTypes(e)}
          >
            <option className="option_types" value="All">
              All Types
            </option>
            {types?.map((type) => (
              <option key={type.id} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
          {/* <select>
            <option value="All">All</option>
            <option value="pokemon"></option>
          </select> */}
        </div>
      </div>
      <div className="wrapper">
        {currentPosts ? (
          currentPosts.map((pokemon) => (
            <Card
              key={pokemon.id}
              name={pokemon.name}
              image={pokemon.img}
              id={pokemon.id}
              attack={pokemon.attack}
              types={pokemon.types}
            />
          ))
        ) : (
          <Loader />
        )}
      </div>
      <div className="pagination">
        {pokemons.length ? (
          <Pagination quantity={pokemons.length} />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};
