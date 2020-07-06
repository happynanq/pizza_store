import React, {  } from 'react';
import { reduxForm, Field } from 'redux-form';

const AddItem = (props)=>{

  return(
    <div className="container center">
      <form onSubmit={props.handleSubmit}>

        <div className="input-field col s6">
          <Field name ="img" component="input"  id="img" type="text" className="validate"/>
          <label htmlFor="img">img</label>
        </div>

        <div className="input-field col s6">
          <Field name ="name" component="input"  id="name" type="text" className="validate"/>
          <label htmlFor="name">name</label>
        </div>

        <div className="input-field col s11">
          <Field name ="description" component="input"  id="description" type="text" className="validate"/>
          <label htmlFor="description">description</label>
        </div>

        <div className="input-field col s1">
          <Field name ="cost" component="input"  id="cost" type="number" className="validate"  />
          <label htmlFor="cost">cost</label>
        </div>
        <div className="input-field col s12">
          <Field name ="title" component="input"  id="title" type="text" className="validate"/>
          <label htmlFor="title">title</label>
        </div>

        <button className="btn">Add Item</button>

      </form>
    </div>
  )
}
export default reduxForm(
  {
    form:"AddItem"
  }
  )(AddItem) 