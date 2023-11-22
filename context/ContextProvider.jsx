import { createContext, useReducer } from "react";
import ContextReducer, { initialRestaurants } from "./ContextReducer";
import React from "react";


// Se crea el context y se exporta la data inicial traida en el reducer.
const restaurantContext = createContext();
const intialData = initialRestaurants();


// Se crea la implementacion del context provider.
const  ContextProvider = ({ children }) => {
  const [context, dispatch] = useReducer(ContextReducer, intialData);
  return (
    <restaurantContext.Provider value={[context, dispatch]}>
      {children}
    </restaurantContext.Provider>
  );
};


// Se exporta el contexto con la data y el context provider para usar en el main.
export { restaurantContext };
export default ContextProvider;