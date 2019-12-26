import React, { Component } from "react";

const UserGreeting = props => <h1>Welcome Back!</h1>;

const GuestGreeting = props => <h1>Please sign Up.</h1>;

const Greeting = ({ isLoggedIn }) => {
  return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
};

const LoginButton = props => <button onClick={props.onClick}>Login</button>;
const LogoutButton = props => <button onClick={props.onClick}>Logout</button>;

class LoginControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  handleLoginClick = () => {
    this.setState({
      isLoggedIn: true
    });
  };

  handleLogoutClick = () => {
    this.setState({
      isLoggedIn: false
    });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <LogoutButton onClick={this.handleLogoutClick} />
        ) : (
          <LoginButton onClick={this.handleLoginClick} />
        )}
      </div>
    );
  }
}

export default LoginControl;
