import React, { useEffect, useState } from 'react';
import Card from "./Card"
import { connect } from 'react-redux';
import { useHttp } from '../../hooks/http.hook';
const CardContainer = (props)=>{
  const {request} = useHttp()
  const [items, setItems] = useState(null);
  useEffect(() => {
    const fetchData = async()=>{
      let response =  request("/api/card/getAllItems","POST", {userId:props.owner} )
      let data = await response
      let userItems = data.userItems[0].items
      setItems(userItems)
      
    }
    fetchData()
    
  }, [props.owner]);
  return(
    <Card {...props} items={items}/>
  )
}
const mapStateToProps = (state)=>({
  owner:state.auth.userId
})
export default connect(mapStateToProps,{
})(CardContainer) 