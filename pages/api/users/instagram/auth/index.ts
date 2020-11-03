


export default async (req, res) => {
  try {
    const instaRes = fetch("https://api.instagram.com/oauth/authorize?client_id=384846652652288&redirect_uri=https://localhost:3000/api/users/instagram/auth&scope=user_profile,user_media&response_type=code")
    console.log(instaRes);

    res.send(instaRes);
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}