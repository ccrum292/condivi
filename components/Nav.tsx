import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useState, useContext } from "react";
import NavItem from "./NavItem";
import UserAndNavContext from "../context/userAndNavContext";
import Gravatar from "react-gravatar";
import LgPillButton from "../components/LgPillButton";
import { useRouter } from "next/router";
import handleLogoutAPI from "../lib/ts/handleLogout";
import FullViewProcessing from "../components/FullViewProcessing";

export default function Nav() {
  const { navOpen, setNavOpen, authToken, setAuthToken, user, setUser } = useContext(UserAndNavContext);
  const [userDropdownDiv, setUserDropdownDiv] = useState(false);
  const router = useRouter();
  const [processingLogout, setProcessingLogout] = useState(false);

  const handleOnClick = () => {
    setNavOpen(!navOpen);
  };

  const handleLogout = async () => {
    setProcessingLogout(!processingLogout);
    const data = await handleLogoutAPI()
    setProcessingLogout(false);
    if (!data) return
    setAuthToken(null);
    setUser(null);
    router.push("/");
  }


  return (
    <>
      {processingLogout ? <FullViewProcessing /> : null}
      <div className="flex items-center justify-between bg-cB-800">
        <div
          className="px-2 my-1 sm:my-0 cursor-pointer sm:transition duration-300 ease-in-out sm:transform hover:scale-125"
          onClick={() => {
            setNavOpen(!navOpen);
          }}
        >
          <FontAwesomeIcon
            style={{ color: "#cb9356" }}
            size="2x"
            icon={faBars}
          />
        </div>
        <div className=" no-select px-2 mx-2 flex justify-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
          <Link href="/">
            <a className="jost self-center text-center text-xl font-bold text-cO-900 sm:text-3xl">
              Condivi
            </a>
          </Link>
        </div>
        {authToken ?
          <div className="no-select mx-2 relative">
            <button onClick={() => setUserDropdownDiv(!userDropdownDiv)} className="no-select focus:outline-none jost self-center flex items-center justify-center text-center font-bold text-cO-999 sm:text-xl cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
              <Gravatar default="mp" className="no-select rounded-full inline mr-2" email={user.email} size={30} /> {user.email.split("@")[0]}
            </button>
            {userDropdownDiv ?
              <div className="origin-top-right absolute right-0 mt-2 text-white">
                <LgPillButton
                  handleOnClick={handleLogout}
                  id={1}
                  text="Logout"
                  classNameTailwind=""
                />
              </div> : null
            }
          </div> :
          <div className="no-select flex justify-center sm:px-2 mx-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
            <Link href="/loginOrRegister">
              <a className="jost self-center text-center font-bold sm:text-xl text-cO-999">
                Login or Register
            </a>
            </Link>
          </div>
        }
      </div>
      {navOpen ? (
        <div className="flex flex-col rounded-b-full border-b-4 border-cO-999 pt-1 pb-12 sm:rounded-b-lg sm:py-2 lg:hidden">
          <NavItem
            handleOnClick={handleOnClick}
            href="/"
            id={1}
            text="Home"
            classNameTailwind="px-16 mt-2 mb-2"
          />
          {authToken ?
            <>
              <NavItem
                handleOnClick={handleOnClick}
                href="/user"
                id={2}
                text="User"
                classNameTailwind="px-16 mt-2 mb-2"
              />
              <NavItem
                handleOnClick={handleOnClick}
                href="/instagramPictures"
                id={3}
                text="Instagram Pictures"
                classNameTailwind="px-16 mt-2 mb-2"
              />
              <LgPillButton
                handleOnClick={handleLogout}
                id={1}
                text="Logout"
                classNameTailwind="px-16 mt-2 mb-2"
              />
            </> :
            <NavItem
              handleOnClick={handleOnClick}
              href="/loginOrRegister"
              id={1}
              text="Login or Register"
              classNameTailwind="px-16 mt-2 mb-2"
            />

          }
        </div>
      ) : null}
    </>
  );
}
