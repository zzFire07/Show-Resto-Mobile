import {
    ListadoRestaurantes
  } from "./data/data.jsx";
  
  const initialRestaurants = () => {
    const restaurants = {
      restaurantes: ListadoRestaurantes
    };
    return restaurants;
  };
  
  const types = {
    setRestaurantes: "setRestaurantes",
  };
  
  const ContextReducer = (state, action) => {
    switch (action.type) {
      case types.setRestaurantes:
        return {
          ...state,
          restaurantes: state.restaurantes.push(...action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export { types };
  export { initialRestaurants };
  export default ContextReducer;