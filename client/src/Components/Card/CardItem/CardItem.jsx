import React, { useEffect, useState } from "react";
import s from "../Card.module.css"
import { useHttp } from "../../../hooks/http.hook";
const CardItem = (props) => {
  const {request} = useHttp()
  const [item, setItem] = useState(null);
  useEffect(()=>{
    async function start(){
      const response =  request("/api/card/getItem", "POST", {itemId:props.id})
      const data = await response
      setItem({...data.item})
      debugger
    }
    start()
  },[props.id])
  return (
    <>
    {!item ? '' :
      <div className={s.wrapper + " orange accent-1"}>
        <div className={s.item}>
          <div className={s.itemContent}>
            <div className={s.img}>
              <img
                src={item.img}
                alt="Item Img"
              />
            </div>
            <div className={s.content}>{item.name}</div>
          </div>
          <div className={s.itemCountWrapper}>
            <div style={{marginRight:10}}>
              {item.cost}$
            </div>
            <div className={s.itemCount}>
              <input type="number" value="1"/>
            </div>
            <div className={s.itemBuy}>
              <button className="btn">Buy</button>
            </div>
          </div>
        </div>
      </div>
    }
    </>
  );
};
export default CardItem;
