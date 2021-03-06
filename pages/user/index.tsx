import Nav from "../../components/Nav";
import Head from "next/head";
import SideNavMenu from "../../components/SideNavMenu";
import { useContext, useState, useEffect } from "react";
import UserAndNavContext from "../../context/userAndNavContext";
import { useRouter } from "next/router";
import FullViewProcessing from "../../components/FullViewProcessing";
import GetInstagramPictures from "../../components/GetInstagramPictures";
import { server } from "../../lib/config";


const UserPage = () => {
  const { navOpen, setNavOpen, authToken } = useContext(UserAndNavContext);
  const [pageDisplayed, setPageDisplayed] = useState(false);
  const router = useRouter()
  useEffect(() => {
    if (authToken) setPageDisplayed(true);
    else router.push("/")
  }, [])


  return (
    <div className="flex flex-col min-h-screen bg-cG-999">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta name="description" content="Your Art" />
        <title>Condivi User Page</title>
      </Head>
      <Nav />
      <div className="flex-grow flex">
        {navOpen ? null : (
          <div className="hidden lg:block w-48">
            <SideNavMenu activeClassCss={{ tabName: "user", tailwindCss: "rounded-full bg-cB-800" }} />
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

export default UserPage;