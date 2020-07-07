import React from 'react';
import { useHttp } from '../../../hooks/http.hook';
import { useMessage } from '../../../hooks/sendMessage';
import { Link, Redirect, useHistory } from 'react-router-dom';

const ItemCard = (props)=>{
  const {request} = useHttp()
  const history = useHistory()
  const message = useMessage()

  const deleteHandler = (e, id)=>{
    try {
      request("/api/item/delete", "DELETE", {id})
      .then(res=>{message(res.message)})
    } catch (e) {
      message(e)
    } finally{
      props.setDel(Date.now())
    }
    
  }

  const openDesc = (e, id)=>{
    history.push("/store/"+id)
  }

  const addToCard = (e, id, userId)=>{
    request("/api/card/addToCard", "POST", {id, userId})
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
            <div className="card-action" >
              <button 
                className="btn" 
                onClick={(e)=>openDesc(e, props.id)}
              >
                Подробнее
              </button>

              <button 
                className="btn" 
                style={{marginLeft:20}}
                onClick={(e)=>addToCard(e, props.id, props.userId)}

              >
                Заказать
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ItemCard 