import { createContext, useReducer } from "react";
import ContextReducer, { initialRestaurants } from "./ContextReducer";
import React from "react";

const restaurantContext = createContext();
const intialData = initialRestaurants();

const  ContextProvider = ({ children }) => {
  const [context, dispatch] = useReducer(ContextReducer, intialData);
  return (
    <restaurantContext.Provider value={[context, dispatch]}>
      {children}
    </restaurantContext.Provider>
  );
};

export { restaurantContext };
export default ContextProvider;