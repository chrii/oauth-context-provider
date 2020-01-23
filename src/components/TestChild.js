import React from "react";
import AuthContext from "../auth/AuthContext";

class TestChild extends React.Component {
  static contextType = AuthContext;

  render() {
    if (this.context.isLoggedIn === null) {
      return <div>Loading...</div>;
    } else if (!this.context.isLoggedIn) {
      return <div>You have to be logged in to get here.</div>;
    } else {
      console.log(this.context);
      return (
        <div>
          Hello, {this.context.userProfile.firstName} !
          {this.context.renderAuthButton()}
        </div>
      );
    }
  }
}

export default TestChild;
