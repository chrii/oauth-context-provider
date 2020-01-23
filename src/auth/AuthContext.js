import React from "react";

const context = React.createContext(false);

export class AuthStore extends React.Component {
  state = { isLoggedIn: null };

  componentDidMount() {}
}

export default context;
