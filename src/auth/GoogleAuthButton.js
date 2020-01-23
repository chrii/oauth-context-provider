import React, { useContext } from "react";
import AuthContext from "./AuthContext";

const GoogleAuthButton = () => {
  const context = useContext(AuthContext);
  console.log(context);
  return <div>Hello</div>;
};
export default GoogleAuthButton;
