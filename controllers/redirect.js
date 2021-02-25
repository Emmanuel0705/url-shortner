const Url = require("../model/url");
const catchAsync = require("../util/catchAsync");

exports.Redirect = catchAsync(async (req, res, next) => {
  const urlCode = req.params.url;
  console.log(urlCode);
  if (!urlCode) return res.status(401).json({ message: "Invalid URl" });
  console.log(urlCode);

  try {
    let url = await Url.findOne({ urlCode });
    if (url) return res.redirect(url.longUrl);
    else return res.status(401).json({ message: "Invalid URL" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: err.message });
  }
});
