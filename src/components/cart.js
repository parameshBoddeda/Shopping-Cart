import { CartState } from "../context/context";
import { ListGroup,Button,Row,Col, Form,Image } from "react-bootstrap";
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai';


import React,{useEffect, useState} from 'react'

const Cart = () => {
  const {state : {cart},dispatch}= CartState();
  const [total, setTotal] = useState();

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=>acc + Number(curr.price)*curr.qty,0));
  },[cart])

  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {cart.map((prod)=>{
            return (
              <ListGroup.Item>
                <Row>
                  <Col md={2}>
                    <Image src={prod.image} alt={prod.name} fluid rounded/>
                  </Col>
                  <Col md={2}>
                    <span>{prod.name}</span>
                  </Col>
                  <Col md={2}>₹{prod.price}</Col>
                  <Col>
                  <Rating rating={prod.ratings}/>
                  </Col>
                  <Col md={2}>
                  <Form.Control onChange={(e)=>{
                    dispatch({
                      type: 'CHANGE_CART_QTY',
                      payload:{
                        id:prod.id,
                        qty: e.target.value
                      }
                    })
                  }} as={'select'} value={prod.qty}>
                    {[...Array(prod.inStock).keys()].map((x)=>(
                      <option key={x+1}>{x+1}</option>
                    ))  
                    }
                  </Form.Control>
                  </Col>
                  <Col md={2}>
                  <Button>
                  <AiFillDelete fontSize='20px' 
                              style={{cursor: 'pointer'}}
                               onClick={()=>{dispatch({
                                type: 'REMOVE_FROM_CART',
                                payload: prod
                              })}}/>
                  </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </div>
      <div className='filters summary'>
          <span className='title'>Sub total ({cart.length})</span>
          <span style={{fontWeight: 700, fontSize: 20}}>Total:₹ {total}</span>
          <Button type='button' disabled={cart.length === 0}>CheckOut</Button>
      </div>
    </div>
  )
}

export default Cart;