import { Card,Button } from "react-bootstrap"

import React from 'react'
import Rating from "./Rating";
import "./styles.css";
import { CartState } from "../context/context";

const SingleProduct = ({ prod }) => {
  const {state : {cart},dispatch}= CartState();
  return (
    <div className='products'>
      <Card>
      <Card.Img variant="top" src={prod.image} alt={prod.name}/>
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Subtitle>
          <span>{prod.price}</span>
          <div>
            {prod.fastDelivery?"Fast delivery":"4 days delivery"}
          </div>
          <Rating rating={prod.ratings} />
          </Card.Subtitle>
          {
            cart.some(p=>p.id===prod.id)?(
              <Button variant="danger" onClick={()=>{dispatch({
                type:"REMOVE_FROM_CART",
                payload: prod
              })}}>Remove from cart</Button>
            ):(
              <Button 
              onClick={()=>{dispatch({
                type:"ADD_TO_CART",
                payload: prod})}}
              disabled={!prod.inStock}>{prod.inStock?"add to cart":"out of stock"}</Button>
            )
          }
        
        
      </Card.Body>
    </Card>
    </div>
  )
}

export default SingleProduct;