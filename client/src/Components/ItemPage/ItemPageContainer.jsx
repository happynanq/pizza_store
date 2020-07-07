import React, { useEffect, useState } from 'react';
import {withRouter} from "react-router-dom"
import ItemPage from './ItemPage';
import { useHttp } from '../../hooks/http.hook';
import Preloader from '../../helper/scripts/Preloader';
const ItemPageContainer = (props)=>{
  const [itemData, setItemData] = useState(null);
  let itemId = props.match.params.id
  const {request} = useHttp()
  useEffect(() => {
    request("/api/item/getItem", "POST", {id:itemId})
    .then(res=>{setItemData(res)}) // !Set item data!
  }, [itemId]);
  
  return(
    <>
    {
      itemData?
      <ItemPage  item={itemData.item}/>:
      <Preloader/>


    }
    </>
  )
}

export default withRouter(ItemPageContainer)