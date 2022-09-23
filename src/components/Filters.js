
import { Form , Button} from 'react-bootstrap';
import React from 'react';
import './styles.css';
import Rating from './Rating';
import { CartState } from "../context/context";

const Filters = () => {
    
    const {productState :{sort,byStock,byFastDelivery,byRating,searchQuery}, productDispatch} = CartState();

  return (
    <div className='filters'>
        <span className='title'> Filter Products</span>
        <span>
            <Form.Check
            inline
            label='Ascending'
            name='group1'
            type='radio'
            id={'inline-1'}
            onChange={()=>
                productDispatch({
                    type: 'SORT_BY_PRICE',
                    payload: 'lowTohigh'
                })
            }
            checked={sort === 'lowTohigh'? true : false}
            />
        </span>
        <span>
            <Form.Check
            inline
            label='Descending'
            name='group1'
            type='radio'
            id={'inline-2'}
            onChange={()=>
                productDispatch({
                    type: 'SORT_BY_PRICE',
                    payload: 'highTolow'
                })
            }
            checked={sort === 'highTolow'? true : false}
            />
        </span>
        <span>
            <Form.Check
            inline
            label='Include Out Of Stock'
            name='group-1'
            type='checkbox'
            id={'inline-3'}
            onChange={()=>
                productDispatch({
                    type: 'FILTER_BY_STOCK',
                })
            }
            checked={byStock}
            />
        </span>
        <span>
            <Form.Check
            inline
            label='Fast Delivery Only'
            name='group-1'
            type='radio'
            id={'inline-4'}
            onChange={()=>
                productDispatch({
                    type: 'FILTER_BY_DELIVERY',
                })
            }
            checked={byFastDelivery}
            />
        </span>
       <span>
        <label style={{paddingRight: '10px'}}>Rating</label>
        <Rating rating={byRating}
         style={{cursor: 'pointer'}} 
         onClick={(i)=>{productDispatch({
            type : "FILTER_BY_RATING",
            payload: i+1
        }
        )}} />
       </span>
       <Button variant='light' onClick={()=>productDispatch({
        type: 'CLEAR_FILTERS',
        payload:{
            byStock : false,
            byFastDelivry: false,
            byRating: 0,
            searchQuery: ''
        }
       })}>Clear Filters</Button>
    </div>
  )
}

export default Filters;