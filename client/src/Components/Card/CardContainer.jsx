import React from 'react';
import Card from "./Card"
import { connect } from 'react-redux';
const CardContainer = (props)=>{
  return(
    <Card {...props}/>
  )
}
const mapStateToProps = (state)=>({
})
export default connect(mapStateToProps,{
})(CardContainer) 