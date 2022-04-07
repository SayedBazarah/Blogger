import { useState } from "react";
import Login from "../component/dashboard/login";
import Dashboard from "../component/dashboard/dashboard";

function admin() {
  const [loginState, setLoginState] = useState(false);

  function changeLoginState() {
    setLoginState(true);
  }

  if (!loginState) {
    return <Login changeLoginState={changeLoginState} />;
  }
  return <Dashboard />;
}
export default admin;
