import React from 'react';
import { BsCartFill } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai';
import {
    Badge,
    Button,
    Container,
    Dropdown,
    FormControl,
    Nav,
    Navbar,
  } from "react-bootstrap";
  import { Link } from "react-router-dom";
import { CartState } from '../context/context';
import './styles.css';

const Header = () => {
   const { state :{ cart},dispatch,productDispatch} = CartState();
      return (
        <Navbar bg="dark" variant="dark" style={{ height: 80 }}>
          <Container>
            <Navbar.Brand>
              <Link to="/" style={{textDecoration: 'none', color: 'white'}}>Shopping Cart</Link>
            </Navbar.Brand>
            <FormControl
                  style={{ width: 500 }}
                  type="search"
                  placeholder="Search a product..."
                  className="search"
                  aria-label="Search"
                  onChange={(e)=>productDispatch({
                    type: 'FILTER_BY_SEARCH',
                    payload: e.target.value
                  })}
                />
            <Nav>
              <Dropdown align="end">
                <Dropdown.Toggle variant="success">
                  <BsCartFill color="white" fontSize="25px" />
                  <Badge>{cart.length}</Badge>
                </Dropdown.Toggle>
    
                <Dropdown.Menu style={{minWidth : 370}}>
                  {
                    (cart.length>0) ? (
                    <>
                    {
                      cart.map((prod)=>{
                        return(
                          <div className='cartItem' key={prod.id}>
                              <img src={prod.image} alt={prod.name} className='cartItemImg'/>
                             <div className='cartItemDetails'>
                             <span>{prod.name}</span>
                              <span>{prod.price}</span>
                             </div>
                              <AiFillDelete fontSize='20px' 
                              style={{cursor: 'pointer'}}
                               onClick={()=>{dispatch({
                                type: 'REMOVE_FROM_CART',
                                payload: prod
                              })}}/>
                          </div>
                            

                      )})
                    }
                    <Link to='./cart'>
                    <Button style ={{width:'95%', margin:'0px 10px'}}>Go To Cart</Button>
                    </Link>
                    
                    </>
                    )
                    : (
                      <span style={{padding: 10}}>cart is empty</span>
                    )
                  }
                 
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Container>
        </Navbar>
      );
    };

export default Header;