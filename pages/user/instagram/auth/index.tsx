import Nav from "../../../../components/Nav";
import Head from "next/head";
import SideNavMenu from "../../../../components/SideNavMenu";
import { useContext, useState, useEffect } from "react";
import UserAndNavContext from "../../../../context/userAndNavContext";
import { useRouter } from "next/router";
import FullViewProcessing from "../../../../components/FullViewProcessing";
import GetInstagramPictues from "../../../../components/GetInstagramPictures";
import { server } from "../../../../lib/config";
import TokenStore from "../../../../lib/ts/TokenStore";


const InstagramAuth = () => {
  const { navOpen, setNavOpen, authToken } = useContext(UserAndNavContext);
  const [pageDisplayed, setPageDisplayed] = useState(false);
  const router = useRouter()

  const grabInstagramAuthToken = () => {
    const instagramAuthToken = window.location.href.split("=")[1].split("#")[0]
    TokenStore.setToken("instagramToken", instagramAuthToken)
  }


  useEffect(() => {
    grabInstagramAuthToken()
    // else router.push("/")
  }, [])


  return (
    <div className="flex flex-col min-h-screen bg-cG-999">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="description" content="Your Art" />
        <title>Condivi User auth Page</title>
      </Head>
      <Nav />
      <div className="flex-grow flex">
        {navOpen ? null : (
          <div className="hidden lg:block w-48">
            <SideNavMenu />
          </div>
        )}
        {pageDisplayed ?
          <>
            <div>

            </div>
          </> :
          <FullViewProcessing />
        }

      </div>
    </div>
  );
}

export default InstagramAuth;