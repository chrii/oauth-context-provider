import React from "react";
import { GOOGLE_API_KEY } from "./constants";

const Context = React.createContext(false);

export class AuthStore extends React.Component {
  state = {
    isLoggedIn: null,
    userProfile: {}
  };

  componentDidMount() {
    window.gapi.load("client:auth2", async () => {
      await window.gapi.client
        .init({
          clientId: GOOGLE_API_KEY,
          scope: "email"
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = isLoggedIn => {
    if (isLoggedIn) {
      const getProfile = this.auth.currentUser.get().getBasicProfile();
      const googleProfile = {
        userId: getProfile.dV,
        fullName: getProfile.Ad,
        firstName: getProfile.IW,
        lastName: getProfile.IU,
        email: getProfile.zu
      };
      /**
       * const googleProfile = {
        userId: getProfile.Eea,
        fullName: getProfile.ig,
        firstName: getProfile.ofa,
        lastName: getProfile.wea,
        email: getProfile.U3
      };
       */

      const userData = this.state.userProfile
        ? googleProfile
        : this.state.userProfile;
      this.setState({ isLoggedIn: true, userProfile: userData });
    } else {
      this.setState({
        isLoggedIn: false,
        userProfile: {}
      });
    }
  };

  onSignInButton() {
    this.auth.signIn();
  }

  onSignOutButton() {
    this.auth.signOut();
  }

  renderAuthButton = () => {
    if (this.context.isSignedIn === null) {
      return <div className="ui active centered inline loader"></div>;
    } else if (this.props.isSignedIn) {
      return (
        <div className="ui google red button" onClick={this.onSignOutButton}>
          <i className="google icon" />
          Sign out
        </div>
      );
    } else {
      return (
        <div className="ui google red button" onClick={this.onSignInButton}>
          <i className="google icon" />
          Sign in with Google
        </div>
      );
    }
  };

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, renderAuthButton: this.renderAuthButton }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
