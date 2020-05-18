import React, { useRef } from "react";

import SignUp from "./SignUp";
import SignIn from "./SignIn";
import "./Authentication.css";

function Authentication(props) {
  const { authType } = props;

  const backgroundRef = useRef(null);

  return (
    <div className="auth-page" ref={backgroundRef}>
      <h3 className="subtitle-landing-page">{authType}</h3>
      {authType === "sign in" ? <SignIn /> : <SignUp />}
    </div>
  );
}

export default Authentication;
