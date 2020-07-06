import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom" 
import NavbarContainer from './Components/Navbar/NavbarContainer';
import StoreContainer from './Components/Store/StoreContainer';
import AuthContainer from './Components/Auth/AuthContainer';
import { loginHandler } from './redux/authReducer';
import { connect } from 'react-redux';
function App(props) {
  const [auth, setAuth] = useState(false)
  useEffect(() => {
    let d = localStorage.getItem("userData")
    if(d){
      props.loginHandler(JSON.parse(d))
      debugger
    }
  }, [])
  useEffect(()=>{
    setAuth(props.isAuth)
  }, [props.isAuth])
  return (
    <BrowserRouter>
      <div className="container-fluid orange accent-2 ">
        <div className="row ">
        <NavbarContainer isAuth={auth}/>
        </div>
        <div className="row center logic">
          <Switch>

          <Route path="/store">
            <StoreContainer />
          </Route>
          
          <Route path="/addItem">
            content addItem
          </Route>

          <Route path="/card">
            content card
          </Route>

          {
            auth ?
            <Route path="/profile">
              content profile
            </Route>
            :
            <Route path="/auth">
              <AuthContainer/>
            </Route>
          }
          
          <Redirect to="/store"/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state)=>({
  isAuth:state.auth.isAuth
})
export default connect(mapStateToProps, 
  {
    loginHandler
  }
)(App);
