export function getAccessToken() {
  const token = localStorage.getItem("spotify_access_token");
  const expiry = localStorage.getItem("spotify_token_expiry");

  if (token && Date.now() < expiry) {
    return token;
  } else {
    // Token expired; clear and reauthorize
    localStorage.removeItem("spotify_access_token");
    localStorage.removeItem("spotify_token_expiry");
    return null;
  }
}
