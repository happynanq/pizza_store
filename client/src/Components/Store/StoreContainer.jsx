import React, { useEffect, useState } from 'react';
import Store from './Store';
import { useHttp } from '../../hooks/http.hook';
import Preloader from '../../helper/scripts/Preloader';
import { connect } from 'react-redux';

const StoreContainer = (props)=>{
  const {request, error, loading} = useHttp()
  const [itemsData, setItemsData] = useState(null);
  const [del, setDel] = useState(false)
  useEffect(() => {
    async function fetchData (){

      let response = request("/api/item/get", "POST")
      const data = await response
      
      setItemsData(data.items)
  
    }
    fetchData()
    },[del]);
  return(
    <>
    { 
      loading ? 
      <Preloader/>: 
      <Store {...props} itemsData={itemsData} setDel={setDel}/>
    }
    </>
  )
}
const mapStateToProps = (store)=>({
  isAdmin :store.auth.isAdmin
})
export default connect(mapStateToProps)(StoreContainer) 