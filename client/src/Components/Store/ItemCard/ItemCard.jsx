import React from 'react';

const ItemCard = (props)=>{
  return(
    <div className="col s6">
      <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src={props.img}/>
              <span class="card-title">Card Title</span>
            </div>
            <div class="card-content">
              <p>Product descrition</p>
            </div>
            <div class="card-action">
              <a href="#">Подробнее</a>
              <a href="#">Заказать</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemCard 