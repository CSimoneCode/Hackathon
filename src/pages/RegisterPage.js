import React from 'react';

class RegisterPage extends React.Component{
  render() {
    return (
      <form action="">
        <input type="text" name="username" id="username"/>
        <input type="text" name="password" id="password"/>
        <input type="text" name="name" id="name"/>
        <input type="text" name="homeAddress" id="homeAddress"/>
        <input type="text" name="email" id="email"/>
        <input type="number" name="phone" id="phone"/>
        <input type="checkbox" name="drinkingAge" id="drinkingAge"/>
        <input type="submit" value="Register"/>
      </form>
    )
  }
}

export default RegisterPage;
