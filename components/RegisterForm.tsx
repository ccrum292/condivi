import Link from "next/link"
import { useState } from "react";
import { server } from "../lib/config";
import FullViewProcessing from "./FullViewProcessing";

interface NewUserObject {
  email: string,
  password: string
}

export default function RegisterForm(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const [error, setError] = useState("");
  const [processingRegistration, setProcessingRegistration] = useState(false);


  const handleSubmit = async e => {
    e.preventDefault()
    if (password !== secondPassword) {
      return setError(`Passwords must match.`);
    }
    setError("");
    const newUserObject: NewUserObject = {
      email: email,
      password: password
    }
    setProcessingRegistration(!processingRegistration);
    const res = await fetch(`${server}/api/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(newUserObject)
    })

    const data = await res.json();
    setProcessingRegistration(!processingRegistration);
    if (data.error) return setError("An Error occurred when creating your account, please try again.")
    props.setSuccessfulRegistration(true);
    props.setIndexOfActiveTab(0);
  }

  return (
    <div className="w-full">
      { processingRegistration ? <FullViewProcessing /> : null}
      <p className="mx-2 font-bold text-red-700">{error}</p>
      <form onSubmit={e => handleSubmit(e)} className="w-full flex flex-col justify-center items-center">
        <div className="mb-4">
          <label className="jost block text-white text-sm mx-2 pt-2 mb-2" htmlFor="email">Email</label>
          <input onChange={e => setEmail(e.target.value)} type="email" className="jost bg-gray-800 shadowClass appearance-none border border-cO-999 border-opacity-50 rounded mx-2 py-2 px-4 text-white leading-tight focus:outline-none" id="email" placeholder="Email" />
        </div>
        <div className="mb-4">
          <label className="jost block text-white text-sm mx-2 pt-2 mb-2" htmlFor="password">Password</label>
          <input onChange={e => setPassword(e.target.value)} type="password" className="jost shadowClass bg-gray-800 appearance-none border border-cO-999 border-opacity-50 rounded mx-2 py-2 px-4 text-white leading-tight focus:outline-none" id="password" placeholder="Password" />
        </div>
        <div className="mb-4">
          <label className="jost block text-white text-sm mx-2 pt-2 mb-2" htmlFor="re-enterPassword">Re-enter Password</label>
          <input onChange={e => setSecondPassword(e.target.value)} type="password" className="jost shadowClass bg-gray-800 appearance-none border border-cO-999 border-opacity-50 rounded mx-2 py-2 px-4 text-white leading-tight focus:outline-none" id="re-enterPassword" placeholder="Re-enter Password" />
        </div>
        <div className="flex items-center justify-between">
          <button type="submit" className="text-white font-bold shadowClass mb-4 rounded-full cursor-pointer bg-cB-700 py-2 px-4 mt-2 ml-2 transition duration-500 ease-in-out hover:bg-cB-600 transform  hover:scale-110">
            <a>Submit</a>
          </button>
        </div>
      </form>
    </div>
  )

}