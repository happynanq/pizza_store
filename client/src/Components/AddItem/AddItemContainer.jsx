import React from 'react';
import AddItem from "./AddItem"
import { connect } from 'react-redux';
import { useHttp } from '../../hooks/http.hook';
import { useMessage } from '../../hooks/sendMessage';
const AddItemContainer = (props)=>{
  const{request, error, loading} = useHttp()
  const message = useMessage()
  const handleSubmit = async(e)=>{
    try {
      const response = request("/api/item/add", "POST", {...e})
      const data = await response
      message(data.message)
    } catch (err) {
      console.log(err);
      
      err.map(e=>{message(e)})
    }
  }
  return(
    <AddItem {...props} onSubmit={handleSubmit}/>
  )
}
const mapStateToProps = (state)=>({
})
export default connect(mapStateToProps,{
})(AddItemContainer) 