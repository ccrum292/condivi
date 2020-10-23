const axios = require("axios");
const cheerio = require("cheerio");
const getUrls = require("get-urls");

export default async (req, res) => {
  try {
    const data = await axios.get("https://www.instagram.com/ozhichige")
    const urls = Array.from(getUrls(data.data))
    // const $ = cheerio.load(data.data);
    // const imgData = $('.FFVAD');
    console.log(urls);
    return res.status(200).json(urls)
  } catch (err) {
    res.status(500).json(err)
  }
}
