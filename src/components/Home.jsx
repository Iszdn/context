import React, { useContext, useEffect, useState } from 'react'
import BasketContext, { useBasket } from '../Context/BasketContext'


const Home = () => {
  
const {addToCart}=useBasket()


const [products, setProducts] = useState([])
    function fetchData() {
        fetch("https://northwind.vercel.app/api/categories").then(res=>res.json()).then(data=>setProducts(data))
    }
    useEffect(() => {
    fetchData()
    }, [])
   
    return (
        <div>
           {
           products && products.map((x)=>(
            <ul key={x.id}>
                <li>{x.id}</li>
                <li>{x.name}</li>
                <li>{x.description}</li>
                <button onClick={addToCart} >add basket</button>
            </ul>
           ))
           }
           </div>
    )
}

export default Home