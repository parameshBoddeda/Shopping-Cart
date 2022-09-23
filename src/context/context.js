
import { faker } from '@faker-js/faker';
import React, {createContext, useContext, useReducer} from 'react';
import { CartReducer, productReducer } from "./reducer";


const Cart = createContext();
const imgs=[faker.image.fashion(),faker.image.food(),faker.image.cats(),faker.image.abstract(),faker.image.animals(),faker.image.avatar(),faker.image.business()];
const Context = ({ children }) => {
    const products = [...Array(21)].map(()=>({
        id : faker.datatype.uuid(),
        name : faker.commerce.productName(),
        price : faker.commerce.price(),
        image : faker.helpers.arrayElement(imgs),
        inStock : faker.helpers.arrayElement([0,3,5,6,7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.helpers.arrayElement([1,2,3,4,5])
    }));
    const [state, dispatch]= useReducer(CartReducer,{
      products: products,
      cart : []
    });
    const [productState, productDispatch]= useReducer(productReducer,{
     byStock : false,
     byFastDelivery: false,
     byRating: 0,
     searchQuery: ''
    })

  return (
    <Cart.Provider value={{state, dispatch, productState, productDispatch}}>{children}</Cart.Provider>
  )
}

export default Context;

export const CartState =()=>{
      return useContext(Cart);
}

