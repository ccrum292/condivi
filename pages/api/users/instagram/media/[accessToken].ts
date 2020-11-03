
export default async (req, res) => {
  try {

    const { query: { accessToken } } = req;

    const instagramResponse = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url&access_token=${accessToken}`)

    const awaitedInstagramData = await instagramResponse.json()

    return res.status(200).json(awaitedInstagramData);

  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}