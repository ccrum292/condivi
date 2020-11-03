import NavItem from "./NavItem";
import { useContext, useState, useEffect } from "react";
import UserAndNavContext from "../context/userAndNavContext";
import LgPillButton from "./LgPillButton";
import { useRouter } from "next/router";
import handleLogoutAPI from "../lib/ts/handleLogout";
import FullViewProcessing from "../components/FullViewProcessing";

export default function SideNavMenu(props) {
  const { authToken, setAuthToken, setUser } = useContext(UserAndNavContext);
  const router = useRouter();
  const [processingLogoutSidNav, setProcessingLogoutSideNav] = useState(false);

  const initialCssValues = [
    { tabName: "home", tailwindCss: "" },
    { tabName: "instagramPictures", tailwindCss: "" },
    { tabName: "user", tailwindCss: "" },
    { tabName: "loginOrRegister", tailwindCss: "" }
  ]

  const [cssValues, setCssValues] = useState(initialCssValues);


  const handleLogout = async () => {
    setProcessingLogoutSideNav(!processingLogoutSidNav);
    const data = await handleLogoutAPI()
    setProcessingLogoutSideNav(false);
    if (!data) return
    setAuthToken(null);
    setUser(null);
    router.push("/");
  }

  useEffect(() => {
    if (props.activeClassCss) {
      const newCssValues = cssValues.map(val => {
        if (val.tabName === props.activeClassCss.tabName) {
          return { tabName: val.tabName, tailwindCss: props.activeClassCss.tailwindCss }
        }

        return val;
      })

      setCssValues(newCssValues);
    }
  }, [])



  return (
    <div className="h-full hidden flex flex-col bg-cG-999 pt-1 pb-12 border-r border-cO-999 border-opacity-50 sm:py-2 lg:block">
      {processingLogoutSidNav ? <FullViewProcessing /> : null}
      <NavItem
        href="/"
        id={1}
        text="Home"
        classNameTailwind={`mx-4 mt-2 mb-2 ${cssValues[0].tailwindCss}`}
      />
      {authToken ?
        <>
          <NavItem
            href="/instagramPictures"
            id={3}
            text="Instagram Pictures"
            classNameTailwind={`mx-4 mt-2 mb-2 ${cssValues[1].tailwindCss}`}
          />
          <NavItem
            href="/user"
            id={2}
            text="User"
            classNameTailwind={`mx-4 mt-2 mb-2 ${cssValues[2].tailwindCss}`}
          />
          <LgPillButton
            handleOnClick={handleLogout}
            id={1}
            text="Logout"
            classNameTailwind={`mx-4 mt-2 mb-2`}
          />
        </> :
        <NavItem
          href="/loginOrRegister"
          id={2}
          text="Login or Register"
          classNameTailwind={`mx-4 mt-2 mb-2 ${cssValues[3].tailwindCss}`}
        />
      }
    </div>
  );
}