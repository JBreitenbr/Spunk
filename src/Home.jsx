import { useEffect, useState } from "react";
import { getAccessToken } from "./utils";

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
