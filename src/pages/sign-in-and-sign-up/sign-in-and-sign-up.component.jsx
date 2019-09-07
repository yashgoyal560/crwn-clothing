import React from "react";

import SignIn from '../../compponents/sign-in/sign-in.component';
import SignUp from '../../compponents/sign-up/sign-up.component'

import "./sign-in-and-sign-up.styles.scss";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
  </div>
);

export default SignInAndSignUpPage;
