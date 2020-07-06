import React from "react";
import s from "../Card.module.css"
const CardItem = () => {
  return (
    <div className={s.wrapper + " orange accent-1"}>
      <div className={s.item}>
        <div className={s.itemContent}>
          <div className={s.img}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQo__TTT5dB2P-2CRcBkGbrxSxscLUENJNG0A&usqp=CAU"
              alt="PizzaImg"
            />
          </div>
          <div className={s.content}>Maria</div>
        </div>
        <div className={s.itemCountWrapper}>
          <div className={s.itemCount}>
            <input type="number" />
          </div>
          <div className={s.itemBuy}>
            <button className="btn">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardItem;
