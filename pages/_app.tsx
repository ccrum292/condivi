import '../styles/index.css';
import UserAndNavContext from "../context/userAndNavContext";
import { useState, useMemo, useEffect } from "react";
import { AppProps } from "next/app";
import signInUserWithAuthToken from "../lib/ts/signInUserWithAuthToken";
import TokenStore from "../lib/ts/TokenStore";

function MyApp({ Component, pageProps }: AppProps) {


  const [navOpen, setNavOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [authToken, setAuthToken] = useState(null);
  const [isZenMode, setIsZenMode] = useState(false);
  const [instagramAccessToken, setInstagramAccessToken] = useState(null);


  useEffect(() => {
    const setUserOnPageLoad = async () => {
      const userData = await signInUserWithAuthToken()
      if (!userData) return
      setUser(userData)
      setAuthToken(TokenStore.getToken("token"))
      setInstagramAccessToken(TokenStore.getToken("instagramAccessToken"))
    }

    setUserOnPageLoad();
  }, [])
  
  const value = useMemo(() => ({ navOpen, setNavOpen, user, setUser, authToken, setAuthToken, isZenMode, setIsZenMode, instagramAccessToken, setInstagramAccessToken }), [navOpen, setNavOpen, user, setUser, authToken, setAuthToken, isZenMode, setIsZenMode, instagramAccessToken, setInstagramAccessToken]);
  return (
    (
      <UserAndNavContext.Provider value={value}>
      
      <Component {...pageProps} />
    
      </UserAndNavContext.Provider>
  )
  );
}

export default MyApp
