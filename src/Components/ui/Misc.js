import React from "react";
import { Link } from "react-router-dom";

export const Tag = props => {
  const template = (
    <div
      style={{
        backgroundColor: props.bgColor,
        fontSize: props.fontSize,
        color: props.color,
        padding: "5px 10px",
        display: "inline-block",
        fontFamily: "Righteous"
      }}
    >
      {props.children}
    </div>
  );

  if (props.isLink) {
    return <Link to={props.linkTo}>{template}</Link>;
  } else {
    return template;
  }
};

export const firebaseLooper = snapshot =>{
  const data = [];
  snapshot.forEach(childSnapshot=>{
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    })
  })
  return data;
}


export const validate = (element) => {
  let error = [true,''];

  if(element.validation.email){
      const valid = /\S+@\S+\.\S+/.test(element.value);
      const message = `${!valid ? 'Must be a valid email':''}`;
      error = !valid ? [valid,message]: error;
  }

  if(element.validation.required){
      const valid = element.value.trim() !== '';
      const message = `${!valid ? 'This field is required':''}`;
      error = !valid ? [valid,message]: error;
  }

  return error;
}
