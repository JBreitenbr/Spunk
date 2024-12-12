//import React from "react";

const SpotifyAuthButton = ({ clientId, redirectUri, scopes, onAccessTokenReceived }) => {
  const handleLogin = () => {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=${encodeURIComponent(scopes.join(" "))}`;

    const width = 500;
    const height = 600;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;

    const popup = window.open(
      authUrl,
      "Spotify Authorization",
      `width=${width},height=${height},top=${top},left=${left}`
    );

    const timer = setInterval(() => {
      try {
        if (popup.closed) {
          clearInterval(timer);
          console.log("Popup closed before authorization.");
        }

        const hash = popup.location.hash;
        if (hash) {
          const params = new URLSearchParams(hash.substring(1));
          const accessToken = params.get("access_token");
          if (accessToken) {
            onAccessTokenReceived(accessToken); // Pass the token to the parent component
            popup.close();
            clearInterval(timer);
          }
        }
      } catch (err) {
        // Ignore cross-origin errors until redirect_uri matches
      }
    }, 1000);
  };

  return <button onClick={handleLogin}>Log in with Spotify</button>;
};

export default SpotifyAuthButton;
