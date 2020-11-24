import React from 'react';
import { Link } from 'react-router-dom';

class LoginPage extends React.Component{
  render() {
    return (
      <form action="" id="loginForm">
        <input type="text" name="username" id="loginInput"/>
        <input type="text" name="password" id="loginInput"/>
        {/* <input type="submit" value="LogIn" id="loginButton"/> */}
        <Link to="/"><button>LogIn</button></Link>
      </form>
    )
  }
}

export default LoginPage;
