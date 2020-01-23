import React from "react";
import { AuthStore } from "../auth/AuthContext";
import TestChild from "./TestChild";

class App extends React.Component {
  render() {
    return (
      <AuthStore>
        <TestChild />
      </AuthStore>
    );
  }
}

export default App;
