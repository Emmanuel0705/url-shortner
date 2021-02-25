const Url = require("../model/url");
const catchAsync = require("../util/catchAsync");
const validUrl = require("valid-url");
const shortid = require("shortid");

exports.newURL = catchAsync(async (req, res, next) => {
  const longUrl = req.body.longUrl;
  const baseUrl = process.env.BASE_URL;
  if (!validUrl.isUri(baseUrl))
    return res.status(401).json("Internal error. Please try again");

  const urlCode = shortid.generate();

  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl });
      if (url) return res.status(200).json(url);

      const shortUrl = `${baseUrl}/${urlCode}`;
      url = new Url({
        longUrl,
        shortUrl,
        urlCode,
      });

      await url.save();
      return res.status(201).json(url);
    } catch (err) {
      console.error(err.message);
      return res.status(500).json("Internal Server error " + err.message);
    }
  } else {
    res
      .status(400)
      .json("Invalid URL. Please enter a vlaid url for shortening.");
  }
});
