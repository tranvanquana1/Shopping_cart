import React, { useState, createContext } from "react";

export const ProductContext = createContext({});

const ProductProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [favorite, setFavorite] = useState([]);
  const [user, setUser] = useState(null);

  return (
    <ProductContext.Provider
      value={{
        cart,
        setCart,
        favorite,
        setFavorite,
        user,
        setUser,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
