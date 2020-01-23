import React from "react";
import { AuthStore } from "../auth/AuthContext";
import TestChild from "./TestChild";
import GoogleAuthButton from "../auth/GoogleAuthButton";

class App extends React.Component {
  render() {
    return (
      <AuthStore>
        <GoogleAuthButton />
        <TestChild />
      </AuthStore>
    );
  }
}

export default App;
