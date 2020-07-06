import React, { useState } from 'react';
import {useHistory} from "react-router-dom"
import { connect } from 'react-redux';
import Login from './Type/Login';
import Register from "./Type/Register"
import {loginHandler} from "../../redux/authReducer" 
import { useMessage } from '../../hooks/sendMessage';
import { useHttp } from '../../hooks/http.hook';

const Auth = (props)=>{
  const [login, setLogin] = useState("Register")
  const history = useHistory()
  const message = useMessage()
  const {request,error, loading} = useHttp()
  const handleChange = (e)=>{
    setLogin( login === "Register" ? "Login":"Register")
  }
  window.setLogin = setLogin
  const registerUser = async(e)=>{
    try {
      const response = request("/api/auth/register","POST",{...e})
      const data = await response
      message(data.message)
      console.log("datadata",data);
      setLogin("Login")


    } catch (e) {
      console.log(e);
      
      e.map(e=>{message(e)})
    }
    
  }
  //Был вариант с не копипастом, но решил не делать его, ибо нет евента у сабмита, а у клика нет редакс формы, быстрее и понятнее так
  
  
  const loginUser = async(e)=>{
    try {
      const response = request("/api/auth/login","POST",{...e})
      const data = await response
      message(data.message)
      
      props.loginHandler(data)
      history.push('/')
    } catch (e) {
      console.log(e);
      
      e.map(e=>{message(e)})
    }
  }

  return(
    <div className="switch center ">
      <label>
        Register
        <input name="switch" type="checkbox"  checked={login ==="Login"} onChange={handleChange} value={login}/>
        <span className="lever"></span>
        Login
      </label>
      <div className="row">
        {
          login === "Register" ? <Register  onSubmit={registerUser} loading={loading}/> : <Login onSubmit={loginUser} loading={loading}/>
        }
      </div>


    </div>
  )
}
export default connect(null, {loginHandler})(Auth) 