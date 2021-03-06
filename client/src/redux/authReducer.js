const LOGIN_HANDLER = "LOGIN_HANDLER"
const initialState = {
  isAuth:false,
  isAdmin:false,
  name:null,
  email:null,
  token:null,
  userId:null,
  
}

export const authReducer = (state=initialState, action)=>{
  switch (action.type) {
    case LOGIN_HANDLER:
      
      return{
        ...state,
        name:action.name,
        email:action.email,
        token:action.token,
        userId:action.userId,
        isAuth:!!action.token,
        isAdmin:action.isAdmin
      }
  
    default:
      return state
  }
}

const setUserData = ({name=null,email=null,token=null,userId=null})=>{
  let isAdmin = email == "k@mail.ru"
  return{
    type:LOGIN_HANDLER,
    name,email,token,userId, isAdmin

  }
}


export const loginHandler = (userData)=> async(dispatch)=>{
  
  delete userData.message 
  let a = JSON.stringify({...userData})
  
  if(!localStorage.getItem("userData")){

    localStorage.setItem("userData", a)

  }

  dispatch(setUserData(userData))
}

export const logoutHandler  = ()=> dispatch =>{
  
  dispatch(setUserData({name:null,email:null,token:null,userId:null}))
  localStorage.removeItem("userData")
}