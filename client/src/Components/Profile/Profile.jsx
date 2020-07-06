import React from 'react';
import {  useHistory} from 'react-router-dom';
import { useMessage } from '../../hooks/sendMessage';

const Profile = (props)=>{
  debugger
  let {name, email} = props.userData
  const history = useHistory()
  const message = useMessage()
  const logoutHandler = ()=>{
    new Promise((resolve, reject)=>{
      try {
        props.logoutHandler()
        resolve()
      } catch (e) {
        reject(e)
      }
      
    })
    .then(()=>{history.push("/")})
    .catch(e=>{message(e)})
    


  }
  return(
    <div className="container">
      <div className="row">
        ProfileInfo
        <div className="divider"></div>
        <div className="col s3">Img</div>

        <div className="col s9">
          <div className="section">
            <h5>Ваше имя</h5>
            <p>{name}</p>
          </div>
          <div className="divider"></div>
          <div className="section">
            <h5>Ваш емаил</h5>
            <p>{email}</p>
          </div>
          <div className="divider"></div>
          <div className="section">
            <button className="btn red darken-2" onClick={logoutHandler}>Выйти из системы</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile 