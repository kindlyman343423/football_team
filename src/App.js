import React, { Component } from "react";
import "./Resources/css/app.css";
import Layout from "./HOC/Layout";
import {Switch} from 'react-router-dom';
import Home from "./Components/Home";
import SignIn from "./Components/signin";
import Dashboard from "./Components/admin/Dashboard";
import PrivateRoute from "./Components/auth_routes/PrivateRoute";
import PublicRoute from "./Components/auth_routes/PublicRoute";

class App extends Component {
  render(props) {
    return <div>
      <Layout>
        <Switch>
          <PrivateRoute {...this.props} exact component={Dashboard} path="/dashboard"/>
          <PublicRoute {...this.props} restricted={true} exact component={SignIn} path="/signin" />
          <PublicRoute {...this.props} exact component={Home} path="/" />
        </Switch>
      </Layout>
    </div>
  }
}

export default App;
