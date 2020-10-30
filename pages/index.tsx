import Nav from '../components/Nav'
import Head from 'next/head'
import SideNavMenu from "../components/SideNavMenu"
import { useContext, useEffect, useRef } from "react";
import UserAndNavContext from "../context/userAndNavContext";
import { GetStaticProps } from "next";
import { server } from "../lib/config";
import ZenModeToggler from "../components/ZenModeToggler";

export const getStaticProps: GetStaticProps = async () => {

  // const res = await fetch(`${server}/api/scrape/instagram`)
  // const data = await res.json()
  let data = { Hello: "Hello World" }

  return {
    props: {
      data
    }
  }

}


export default function IndexPage({ data }) {
  const { navOpen, setNavOpen, user, setUser, authToken, setAuthToken } = useContext(UserAndNavContext);
  const indexPageRef = useRef(null);

  return (
    <div className="flex flex-col min-h-screen bg-cG-999">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="description"
          content="Next.js and Tailwind eCommerce Store"
        />
        <title>Condivi Home Page</title>
      </Head>
      <Nav />
      <div className="flex-grow lg:flex">
        {navOpen ? null : (
          <div className="hidden lg:block w-48">
            <SideNavMenu />
          </div>
        )}
        <div ref={indexPageRef} className="text-white bg-cG-999">
          <ZenModeToggler focusRef={indexPageRef} />
        </div>
      </div>
    </div>
  );
}
