import { useRef, useState } from "react";

import Style from "./login.module.css";

function Login(props) {
  const [loginError, setLoginError] = useState(false);
  const user = {
    email: "sayed@yahoo.com",
    password: "12345",
  };

  const email = useRef();
  const password = useRef();

  function HandleUserLogin(e) {
    e.preventDefault();
    if (
      user.email === email.current.value &&
      user.password === password.current.value
    ) {
      console.log("Loged in");
      props.changeLoginState();
    } else {
      setLoginError(true);
    }
  }
  return (
    <div className={Style.container}>
      <h1>Baiomy Blog</h1>
      <form onSubmit={HandleUserLogin}>
        <div>
          <input ref={email} placeholder="Email" />
          <input ref={password} placeholder="Password" type="password" />
          <button>Login</button>
        </div>
      </form>
      {loginError ? <p>User not found</p> : <p></p>}
    </div>
  );
}
export default Login;
