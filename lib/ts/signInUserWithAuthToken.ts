import TokenStore from "./TokenStore";
import { server } from "../config";


const signInUserWithAuthToken = async () => {
  const token = TokenStore.getToken("token");
  if (!token) return
  const res = await fetch(`${server}/api/users/login/auth`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      token: token
    }
  })
  const data = await res.json();
  return {
    email: data.data.email,
    ref: data.ref
  }
}

export default signInUserWithAuthToken;