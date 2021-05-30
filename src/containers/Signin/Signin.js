import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";

class Signin extends React.Component {
  render() {
    return (
      <div className="container--form">
        <AuthForm isSignup={false} />
      </div>
    );
  }
}

export default Signin;
