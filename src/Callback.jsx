import { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";

function Callback() {
  const navigate = useNavigate();
  const [varl,setVarl]=""
  useEffect(() => {
    const hash = window.location.hash.substring(1);/*.split("&").find((param) => param.startsWith("access_token"))?.split("=")[1];  */
    const params = new URLSearchParams(hash);
    const accessToken = params.get("access_token");
    const expiresIn = params.get("expires_in");

    if (accessToken) {
      // Store token in localStorage
      localStorage.setItem("spotify_access_token", accessToken);
      localStorage.setItem("spotify_token_expiry", Date.now() + expiresIn * 1000);

      // Redirect to the main page
      //navigate("/Spunk");
      //document.write(hash.substring(0, hash.length - 56));
      setVarl(hash.substring(0, hash.length - 56)+"blah");
      localStorage.setItem("varia", hash.substring(0, hash.length - 56));
      navigate("/Spunk/test");
    } else {
      console.error("Authorization failed");
    }
  }, [navigate]);

  return <div>{varl}</div>;
}

export default Callback;
