import { useState } from "react";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

export default function TabDiv() {
  const [indexOfActiveTab, setIndexOfActiveTab] = useState(0);
  const [successfulRegistration, setSuccessfulRegistration] = useState(false);

  const handleTabClick = e => {
    setIndexOfActiveTab(e.target.value);
  }

  const tabActive = "cursor-pointer jost border-t-4 border-r-4 border-l-4 border-cO-999 rounded-t-lg py-2 px-4 text-white font-semibold bg-cB-700 transition duration-500 ease-in-out transform hover:underline";
  const tabInactive = "cursor-pointer py-2 px-4 jost text-white cursor-pointer rounded-t-lg transition duration-500 ease-in-out transform hover:bg-cB-700 hover:underline";

  return (
    <div className="flex-grow flex flex-col items-center justify-center lg:w-8/12 lg:mx-auto">

      <div className="shadowClass rounded-lg max-w-xs">
        <ul className="flex">
          <li value={0} onClick={e => handleTabClick(e)} className={indexOfActiveTab === 0 ? tabActive : tabInactive}>
            Login
          </li>
          <li value={1} onClick={e => handleTabClick(e)} className={indexOfActiveTab === 1 ? tabActive : tabInactive}>
            Register
          </li>
        </ul>
        <div className="bg-cG-999 border-4 border-cO-999 rounded-b-lg rounded--lg">
          {
            indexOfActiveTab === 0 ?
              <LoginForm successfulRegistration={successfulRegistration} setSuccessfulRegistration={setSuccessfulRegistration} /> :
              <RegisterForm successfulRegistration={successfulRegistration} setSuccessfulRegistration={setSuccessfulRegistration} indexOfActiveTab={indexOfActiveTab} setIndexOfActiveTab={setIndexOfActiveTab} />
          }
        </div>
      </div>

    </div>
  )
}