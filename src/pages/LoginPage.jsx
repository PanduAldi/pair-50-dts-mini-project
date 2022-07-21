import React, { useEffect } from "react";

import LoginOrRegisterForm from "../components/LoginOrRegisterForm";
import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [user, loading, err] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      return;
    }
  });

  return <LoginOrRegisterForm loginOrRegister={"login"} />;
};

export default LoginPage;
