import React, {} from 'react';
import s from "./Card.module.css"
import CardItem from './CardItem/CardItem';

const Card = (props)=>{
  

  
  return(
    <div className="container">
      <div className="row center">
        Ваша корзина
      </div>
      <div className="row">
        <CardItem/>
      </div>
    </div>
  )
}
export default Card 