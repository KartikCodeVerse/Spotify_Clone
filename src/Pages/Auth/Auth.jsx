import React, { useState } from "react";
import "./Auth.css";
import { GoogleLogin } from "react-google-login";

const clientId =
  "123331958114-ot4rsp70v8l908o3lsb4dro2fg3ot9bi.apps.googleusercontent.com";
const Auth = () => {
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState();
  const [loading, setLoading] = useState(false);

  const onSuccess = (res) => {
    setName(res.profileObj["name"]);
    console.log("Success", res.profileObj);
    setFlag(true);
    setLoading(false);
  };
  const onFailure = (res) => {
    console.log("Failed", res);
    setLoading(false);
  };
  const startAuthentication = () => {
    setLoading(true);
  };

  return (
    <div className="login_page">
      {flag ? (
        <h2>Hello {name}</h2>
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText={loading ? "Signing in..." : "Sign in with Google"}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
          isSignedIn={false}
          onClick={startAuthentication}
        />
      )}
    </div>
  );
};

export default Auth;
