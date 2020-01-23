import React, { useContext } from "react";
import AuthContext from "./AuthContext";

const GoogleAuthButton = () => {
  const context = useContext(AuthContext);

  if (context.isSignedIn === null) {
    return <div className="ui active centered inline loader"></div>;
  } else if (context.isSignedIn) {
    return (
      <div className="ui google red button" onClick={null}>
        <i className="google icon" />
        Sign out
      </div>
    );
  } else {
    return (
      <div className="ui google red button" onClick={null}>
        <i className="google icon" />
        Sign in with Google
      </div>
    );
  }
};
export default GoogleAuthButton;
