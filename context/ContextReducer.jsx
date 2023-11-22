import {
    ListadoRestaurantes
  } from "./data/data.jsx";
  
  const initialRestaurants = () => {
    const restaurants = {
      restaurantes: ListadoRestaurantes
    };
    return restaurants;
  };
  
  // Se tendra solo un objeto en el context, que sera restaurantes.
  const types = {
    setRestaurantes: "setRestaurantes",
  };
  
  // Solo un case para el reducer, que sera setRestaurantes.
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
  

  // Se exporta los types para usar en el dispatcher, y los otros dos para usar en el context provider.
  export { types };
  export { initialRestaurants };
  export default ContextReducer;