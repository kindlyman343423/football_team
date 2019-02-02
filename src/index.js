import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import {app} from './firebase';

const Router = (props) => {
  return (
    <BrowserRouter>
      <App {...props}/>
    </BrowserRouter>
  );
};

app.auth().onAuthStateChanged((user)=>{
  ReactDOM.render(<Router user={user}/>, document.getElementById("root"));
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
