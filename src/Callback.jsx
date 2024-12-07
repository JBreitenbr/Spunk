import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Callback() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash.substring(1); // Remove the '#' at the start
    const params = new URLSearchParams(hash);
    const accessToken = params.get("access_token");
    const expiresIn = params.get("expires_in");

    if (accessToken) {
      // Store token in localStorage
      localStorage.setItem("spotify_access_token", accessToken);
      localStorage.setItem("spotify_token_expiry", Date.now() + expiresIn * 1000);

      // Redirect to the main page
      navigate("/Spunk");
    } else {
      console.error("Authorization failed");
    }
  }, [navigate]);

  return <div>Processing Spotify Login...</div>;
}

export default Callback;
