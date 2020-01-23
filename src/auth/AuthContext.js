import React from "react";
import { GOOGLE_API_KEY } from "./constants";

const Context = React.createContext(false);

export class AuthStore extends React.Component {
  state = {
    isSignedIn: null,
    userProfile: {}
  };

  profile = "";

  init() {
    return window.gapi.load("auth2:client", async () => {
      await window.gapi.auth2
        .init({
          client_id: GOOGLE_API_KEY,
          scope: "email"
        })
        .then(onInit => {
          this.auth = onInit;
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  componentDidMount() {
    this.init();
  }
  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      const profile = this.auth.currentUser.get().getBasicProfile();
      const googleProfile = {
        userId: profile.getId(),
        fullName: profile.getName(),
        firstName: profile.getGivenName(),
        lastName: profile.getFamilyName(),
        email: profile.getEmail(),
        profilePic: profile.getImageUrl()
      };

      const userData = this.state.userProfile
        ? googleProfile
        : this.state.userProfile;
      this.setState({ isSignedIn: true, userProfile: userData });
    } else {
      this.setState({
        isSignedIn: false,
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

  render() {
    if (this.auth2 !== undefined) {
      console.log(this.auth2.currentUser.get().getBasicProfile());
    }
    return (
      <Context.Provider value={{ ...this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
