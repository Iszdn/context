import {  createContext, useState } from "react";

import React from 'react'
import { useContext } from "react";
export const BasketContext=createContext()


function BasketProvider({children}) {
const [basket, setBasket] = useState(localStorage.getItem('basket') ? JSON.parse(localStorage.getItem('basket')) : [])
const addToCart=()=>{
       setBasket([...basket])
}

  return (
    <BasketContext.Provider value={
    {basket,setBasket,addToCart}
    }>
{children}
    </BasketContext.Provider>
  )
}

export default BasketProvider
export const useBasket=()=>useContext(BasketContext)