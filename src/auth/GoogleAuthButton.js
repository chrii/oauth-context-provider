import React, { useContext } from "react";
import AuthContext from "./AuthContext";

const GoogleAuthButton = () => {
  const context = useContext(AuthContext);

  if (context.isSignedIn === null) {
    return (
      <div className="ui google red button">
        <i className="google icon" />
        <div className="ui active centered inline loader"></div>
      </div>
    );
  }
  if (context.isSignedIn) {
    return (
      <div
        className="ui google red button"
        onClick={window.gapi.auth2.getAuthInstance().signOut}
      >
        <i className="google icon" />
        Sign out
      </div>
    );
  } else {
    return (
      <div
        className="ui google red button"
        onClick={window.gapi.auth2.getAuthInstance().signIn}
      >
        <i className="google icon" />
        Sign in with Google
      </div>
    );
  }
};
export default GoogleAuthButton;
