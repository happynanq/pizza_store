import React, {  } from 'react';
import {reduxForm, Field} from "redux-form"
import { compose } from 'redux';
// import { connect } from '';

const Login = (props)=>{
  return(
    <div className=" container">
      <form onSubmit={props.handleSubmit } className="center">
        

        <div className="row">
          <div className="input-field  ">
            <Field id="email" name="email" type="text" className="validate" component="input" />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        
        <div className="row">
          <div className="input-field  text-dark">
            <Field id="password" name="password" type="password" className="validate" component="input" />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button className="btn">Login</button>

      </form>
    </div>
  )
}
export default compose( 
  
  reduxForm({
    form:"login"
  })

)(Login) 
