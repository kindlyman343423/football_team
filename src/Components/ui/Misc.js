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
