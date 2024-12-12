import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Callback from "./Callback";
import Home from "./Home";
import Test from "./Test";
import { useEffect, useState } from "react";
import SpotifyAuthButton from "./SpotifyAuthButton";
function App() {
const { VITE_CLIENT_ID } = import.meta.env;
const { VITE_REDIRECT_URI } = import.meta.env;
const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-private",
];
  /*return (
    <Router>
      <Routes>
        <Route path="/Spunk" element={<Home />} />
        <Route path="/Spunk/test" element={<Test />} />
        <Route path="/Spunk/redirect" element={<Callback />} />
      </Routes>
    </Router>
    
  );*/

    const [accessToken, setAccessToken] = useState(null)/*useState(localStorage.getItem("spotify_access_token"))*/;

    const handleAccessToken = (token) => {
      setAccessToken(token);
      console.log("Received Access Token:", token);
    };

    return (
      <div>
        <h1>Spotify Authentication Example</h1>
        {!accessToken ? (
          <SpotifyAuthButton
            clientId= {VITE_CLIENT_ID}
            redirectUri={VITE_REDIRECT_URI}
            scopes={scopes}
            onAccessTokenReceived={handleAccessToken}
          />
        ) : (
          <p>Access Token: {accessToken}</p>
        )}
      </div>
    );
  };

  export default App;


