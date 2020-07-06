import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom" 
import NavbarContainer from './Components/Navbar/NavbarContainer';
import StoreContainer from './Components/Store/StoreContainer';
import AuthContainer from './Components/Auth/AuthContainer';
import { loginHandler } from './redux/authReducer';
import { connect } from 'react-redux';
import ProfileContainer from './Components/Profile/ProfileContainer';
import CardContainer from './Components/Card/CardContainer';
import AddItemContainer from './Components/AddItem/AddItemContainer';
function App(props) {
  const [auth, setAuth] = useState(false)
  useEffect(() => {
    let d = localStorage.getItem("userData")
    if(d){
      props.loginHandler(JSON.parse(d))
      
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
        <div className="row  logic">
          <Switch>

            <Route path="/store">
              <StoreContainer />
            </Route>
            
            <Route path="/addItem">
              <AddItemContainer/>
            </Route>

            <Route path="/card">
              <CardContainer/>
            </Route>

            {
              auth ?
              <Route path="/profile">
                <ProfileContainer/>
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
