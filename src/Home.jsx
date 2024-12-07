import { useEffect, useState } from "react";
import { getAccessToken } from "./utils";

const { VITE_CLIENT_ID } = import.meta.env;
const { VITE_REDIRECT_URI } = import.meta.env;
const scopes = [
  "user-top-read",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-private",
];
function authorizeSpotify() {
  const authUrl = `https://accounts.spotify.com/authorize?client_id=${VITE_CLIENT_ID}&response_type=token&redirect_uri=${encodeURIComponent(VITE_REDIRECT_URI)}&scope=${encodeURIComponent(scopes.join(" "))}`;
  window.location.href = authUrl;
}
function Home() {
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const token = getAccessToken();

    if (token) {
      fetch("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setUserProfile(data))
        .catch((error) => console.error("Error fetching profile:", error));
    }
  }, []);

  return (
    <div>
      <h1>Spotify React App</h1>
      {!userProfile ? (
        <button onClick={authorizeSpotify}>Login with Spotify</button>
      ) : (
        <div>
          <h2>Welcome, {userProfile.display_name}</h2>
          <img src={userProfile.images[0]?.url} alt="Profile" width={100} />
        </div>
      )}
    </div>
  );
}

export default Home;
