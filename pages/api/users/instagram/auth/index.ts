const client_secret = process.env.INSTAGRAM_CLIENT_SECRET_KEY;
const client_id = process.env.INSTAGRAM_CLIENT_ID;

export default async (req, res) => {
  try {
    const instagramCode = req.body.instagramCode;

    const instagramResponse = await fetch("https://api.instagram.com/oauth/access_token", {
      method: `POST`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
      },
      body: new URLSearchParams({
        "client_id": client_id,
        "client_secret": client_secret,
        "grant_type": "authorization_code",
        "redirect_uri": "https://localhost:3000/user/instagram/auth",
        "code": instagramCode
      })
    })

    const awaitedInstagramData = await instagramResponse.json()

    return res.status(200).json(awaitedInstagramData);

  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}