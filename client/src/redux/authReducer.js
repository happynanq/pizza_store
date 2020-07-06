const LOGIN_HANDLER = "LOGIN_HANDLER"
const initialState = {
  isAuth:false,
  name:null,
  email:null,
  token:null,
  userId:null
}

export const authReducer = (state=initialState, action)=>{
  switch (action.type) {
    case LOGIN_HANDLER:
      debugger
      return{
        ...state,
        name:action.name,
        email:action.email,
        token:action.token,
        userId:action.userId,
        isAuth:!!action.token
      }
  
    default:
      return state
  }
}

const setUserData = ({name=null,email=null,token=null,userId=null})=>{
  return{
    type:LOGIN_HANDLER,
    name,email,token,userId

  }
}


export const loginHandler = (userData)=> async(dispatch)=>{
  debugger
  delete userData.message 
  let a = JSON.stringify({...userData})
  debugger
  if(!localStorage.getItem("userData")){

    localStorage.setItem("userData", a)

  }

  dispatch(setUserData(userData))
}

export const logoutHandler  = ()=> dispatch =>{
  debugger
  dispatch(setUserData({name:null,email:null,token:null,userId:null}))
  localStorage.removeItem("userData")
}