import NavItem from "./NavItem";
import { useContext, useState } from "react";
import UserAndNavContext from "../context/userAndNavContext";
import LgPillButton from "./LgPillButton";
import { useRouter } from "next/router";
import handleLogoutAPI from "../lib/ts/handleLogout";
import FullViewProcessing from "../components/FullViewProcessing";

export default function SideNavMenu(props) {
  const { authToken, setAuthToken, setUser } = useContext(UserAndNavContext);
  const router = useRouter();
  const [processingLogoutSidNav, setProcessingLogoutSideNav] = useState(false);

  const handleOnClick = () => {
    console.log("hit");
  };

  const handleLogout = async () => {
    setProcessingLogoutSideNav(!processingLogoutSidNav);
    const data = await handleLogoutAPI()
    setProcessingLogoutSideNav(false);
    if (!data) return
    setAuthToken(null);
    setUser(null);
    router.push("/");
  }

  return (
    <div className="h-full hidden flex flex-col bg-cG-999 pt-1 pb-12 border-r border-cO-999 border-opacity-50 sm:py-2 lg:block">
      {processingLogoutSidNav ? <FullViewProcessing /> : null}
      <NavItem
        handleOnClick={handleOnClick}
        href="/"
        id={1}
        text="Home"
        classNameTailwind="mx-4 mt-2 mb-2"
      />
      {authToken ?
        <>
          <NavItem
            href="/user"
            id={2}
            text="User"
            classNameTailwind="mx-4 mt-2 mb-2"
          />
          <NavItem
            href="/instagramPictures"
            id={3}
            text="Instagram Pictures"
            classNameTailwind="mx-4 mt-2 mb-2"
          />
          <LgPillButton
            handleOnClick={handleLogout}
            id={1}
            text="Logout"
            classNameTailwind="mx-4 mt-2 mb-2"
          />
        </> :
        <NavItem
          href="/loginOrRegister"
          id={2}
          text="Login or Register"
          classNameTailwind="mx-4 mt-2 mb-2"
        />
      }
    </div>
  );
}