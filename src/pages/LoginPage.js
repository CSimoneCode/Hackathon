import React from 'react';

class LoginPage extends React.Component{
  render() {
    return (
      <form action="">
        <input type="text" name="username" id="username"/>
        <input type="text" name="password" id="password"/>
        <input type="submit" value="LogIn"/>
      </form>
    )
  }
}

export default LoginPage;