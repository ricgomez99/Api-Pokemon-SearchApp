import axios from "axios";
import {
  GET_POKEMON_DETAILS,
  GET_POKEMONS,
  GET_TYPES,
  CLEAN_DETAIL,
  ORDER_ASC_DESC,
  FILTER_BY_TYPES,
  SET_PAGE_INDEX,
  ORDER_BY_ATTACK,
  SEARCH_POKEMON,
  GET_POKEMONS_BY_NAME,
  FILTER_IN_DATABASE,
} from "../Action-types/actionTypes";

export const getPokemons = (dispatch) => {
  return function (dispatch) {
    try {
      axios
        .get("/pokemons")
        .then((response) => response.data)
        .then((data) => dispatch({ type: GET_POKEMONS, payload: data }));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getPokemonDetails = (id) => {
  return function (dispatch) {
    try {
      axios
        .get(`/pokemons/${id}`)
        .then((response) => response.data)
        .then((data) => dispatch({ type: GET_POKEMON_DETAILS, payload: data }));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getTypes = (dispatch) => {
  return function (dispatch) {
    try {
      axios
        .get("/types")
        .then((response) => response.data)
        .then((data) => dispatch({ type: GET_TYPES, payload: data }));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const getPokemonsByName = (name) => {
  return {
    type: GET_POKEMONS_BY_NAME,
    payload: name,
  };
};

export const addPokemon = (payload) => {
  return function (dispatch) {
    try {
      axios.post("/pokemons", payload);
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const searchPokemon = (name) => {
  return function (dispatch) {
    try {
      axios
        .get("/pokemons?name=" + name.charAt(0).toUpperCase() + name.slice(1))
        .then((response) => response.data)
        .then((data) => dispatch({ type: SEARCH_POKEMON, payload: data }));
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

export const orderAscDesc = (payload) => {
  return {
    type: ORDER_ASC_DESC,
    payload,
  };
};

export const filterByTypes = (payload) => {
  return {
    type: FILTER_BY_TYPES,
    payload,
  };
};

export const filterInDatabase = (payload) => {
  return {
    type: FILTER_IN_DATABASE,
    payload,
  };
};

export const setPageIndex = (payload) => {
  return {
    type: SET_PAGE_INDEX,
    payload,
  };
};

export const orderByAttack = (payload) => {
  return {
    type: ORDER_BY_ATTACK,
    payload,
  };
};
