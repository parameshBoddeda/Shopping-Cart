import React from 'react';
import {AiFillStar, AiOutlineStar} from 'react-icons/ai'

const Rating = ({rating, onClick, style}) => {
  return (
    <div>
{
    [...Array(5)].map((_,i)=>{
        return (
            <span onClick={(()=>onClick(i))} style={style}>{rating>i?
            <AiFillStar />
            :
            <AiOutlineStar />
            }</span>
        )
    })
}
    </div>
  )
}

export default Rating;