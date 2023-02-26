import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./assets/components/LoginButton";
import LogoutButton from "./assets/components/LogoutButton";
import Posts from "./assets/components/Posts";
import "./App.css";
import axios from "axios";

function App() {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  async function callProtectedApi() {
    try {
      const token = await getAccessTokenSilently();
      console.log(token);
      const response = await fetch("http://localhost:4000/protected", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <LoginButton />
      <LogoutButton />
      {/* <Posts /> */}
      <button onClick={callProtectedApi}>Protected Api</button>

      {!isAuthenticated && <h1>LOGGED out</h1>}
    </>
  );
}

export default App;
