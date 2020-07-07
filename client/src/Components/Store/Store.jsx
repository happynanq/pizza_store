import React, { useEffect } from 'react';
import {  } from 'react-router-dom';
import ItemCard from './ItemCard/ItemCard';
import { useHttp } from '../../hooks/http.hook';

const Store = (props)=>{
  
  return(
    <div className="container">
      
      {props.itemsData && props.itemsData.map(d=><ItemCard 
        img={d.img} 
        name={d.name} 
        cost={d.cost} 
        title={d.title} 
        key={d._id}
        id={d._id}
        setDel={props.setDel}
        isAdmin = {props.isAdmin}
      />)}
      
      
      
    </div>
  )
}
export default Store 