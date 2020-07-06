import React from 'react';
import Profile from "./Profile"
import { connect } from 'react-redux';
import { logoutHandler } from '../../redux/authReducer';
const ProfileContainer = (props)=>{
  return(
    <Profile {...props}/>
  )
}
const mapStateToProps = (state)=>({
  userData : state.auth
})
export default connect(mapStateToProps,{
  logoutHandler
})(ProfileContainer) 