import {
  ADD_POKEMON,
  GET_POKEMONS,
  GET_POKEMON_DETAILS,
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

const initialState = {
  pokemons: [],
  allPokemons: [],
  pageIndex: 1,
  types: [],
  details: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };

    case GET_POKEMON_DETAILS:
      return {
        ...state,
        details: action.payload,
      };

    case GET_POKEMONS_BY_NAME:
      let name =
        action.payload === ""
          ? state.allPokemons
          : state.pokemons.filter((e) =>
              e.name.toLowerCase().includes(action.payload.toLowerCase())
            );
      return {
        ...state,
        pokemons: name,
      };

    case SEARCH_POKEMON:
      return {
        ...state,
        pokemons: action.payload,
      };

    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };

    case ADD_POKEMON:
      return { ...state };

    case CLEAN_DETAIL:
      return {
        ...state,
        details: {},
      };

    case FILTER_BY_TYPES:
      let filtered =
        action.payload === "All"
          ? state.allPokemons
          : state.allPokemons
              .map((el) => {
                let info;
                for (let key in el.types) {
                  if (el.types[key].name === action.payload) info = el;
                  else if (el.types[key] === action.payload) info = el;
                }
                return info;
              })
              .filter((e) => e);
      return {
        ...state,
        pokemons: filtered,
      };

    case FILTER_IN_DATABASE:
      let result;
      if (action.payload === "All") {
        result = state.allPokemons;
      }
      if (action.payload === "pokemonDB") {
        result = state.allPokemons.filter((e) => e.id.length > 2);
      }
      if (action.payload === "pokemonAPI") {
        result = state.allPokemons.filter((e) => e.id.length <= 2);
      }

      return {
        ...state,
        pokemons: result,
      };

    case ORDER_ASC_DESC:
      let sorted =
        action.payload === true
          ? state.pokemons?.sort((a, b) => a.name.localeCompare(b.name))
          : state.pokemons?.sort((a, b) => b.name.localeCompare(a.name));
      return {
        ...state,
        pokemons: sorted,
      };

    case ORDER_BY_ATTACK:
      let attackSorted =
        action.payload === true
          ? state.pokemons.sort((a, b) => {
              if (a.attack > b.attack) return 1;
              if (b.attack > a.attack) return -1;

              return 0;
            })
          : state.pokemons.sort((a, b) => {
              if (a.attack > b.attack) return -1;
              if (b.attack > a.attack) return 1;

              return 0;
            });

      return {
        ...state,
        pokemons: attackSorted,
      };

    case SET_PAGE_INDEX:
      return {
        ...state,
        pageIndex: action.payload,
      };

    default:
      return { ...state };
  }
}
