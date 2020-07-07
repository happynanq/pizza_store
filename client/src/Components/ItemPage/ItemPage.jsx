import React, {  } from 'react';

const ItemPage = (props)=>{
  
  return(
    <div className="container center">
      <div className="row">
        <div className="col s3">
          <img src={props.item.img} alt="Item Image"/>
        </div>
        <div className="col s6">
          {props.item.name}
          <div>
            {props.item.describe}
          </div>
        </div>
        <div className="col s3">
          price:{props.item.cost}$
        </div>
      </div>
    </div>
  )
}
export default ItemPage 