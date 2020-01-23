import React from "react";
import AuthContext from "../auth/AuthContext";
import GoogleAuthButton from "../auth/GoogleAuthButton";

class TestChild extends React.Component {
  static contextType = AuthContext;

  render() {
    if (this.context.isSignedIn === null) {
      return <div>Loading...</div>;
    } else if (!this.context.isSignedIn) {
      return (
        <div>
          You have to be logged in to get here.
          <GoogleAuthButton />
        </div>
      );
    } else {
      return <div>Hello, {this.context.userProfile.firstName} !</div>;
    }
  }
}

export default TestChild;
