import React, {createContext, useState} from "react"

const BasketContext = createContext()

export default BasketContext


export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);
  
    const addToBasket = (product) => {
      setBasket((prevBasket) => [...prevBasket, product]);
    };
  
    const removeFromBasket = (productId) => {
      setBasket((prevBasket) => prevBasket.filter((item) => item.id !== productId));
    };
  
    const clearBasket = () => {
      setBasket([]);
    };
  
    return (
      <BasketContext.Provider
        value={{
          basket,
          addToBasket,
          removeFromBasket,
          clearBasket,
        }}
      >
        {children}
      </BasketContext.Provider>
    );
  };
  