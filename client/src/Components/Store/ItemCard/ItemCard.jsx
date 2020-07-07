import React from 'react';
import { useHttp } from '../../../hooks/http.hook';
import { useMessage } from '../../../hooks/sendMessage';

const ItemCard = (props)=>{
  const {request} = useHttp()
  const message = useMessage()
  const deleteHandler = (e, id)=>{
    debugger
    try {
      request("/api/item/delete", "DELETE", {id})
      .then(res=>{message(res.message)})
    } catch (e) {
      message(e)
    } finally{
      props.setDel(Date.now())
    }
    
  }
  return(
    <div className="col s6">
      <div className="row">
        <div className="col s12 m7" style={{height:500}}>
          <div className="card">
          
            <div className="card-image">

              {
                props.isAdmin 
                &&
                <button className="ivisibleBtn" onClick={(e)=>deleteHandler(e, props.id)}>
                  <i className="small material-icons absolutIcons"> delete</i>
                </button>
                }

              <img src={props.img} />
              <span className="card-title">{props.name}</span>
            </div>
            <div className="card-content">
              <p>{props.title}</p>
            </div>
            <div className="card-action">
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