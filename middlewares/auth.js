const { Product, Seller } = require("../models");
const { verifyToken } = require("../helpers/jwt");
const seller = require("../models/seller");

function authenticate(req, res, next) {
  const { access_token } = req.headers;
  console.log(`Ini dari headers`, req.headers);
  if (access_token) {
    const decoded = verifyToken(access_token);
    console.log(`data decode`, decoded);
    Seller.findOne({
      where: {
        email: decoded.email,
      },
    })
      .then((seller) => {
        if (!seller) {
          res.status(401).json({ msg: `Invalid access token!` });
        } else {
          res.seller = { id: seller.id, email: seller.email, test: "check seller" };
          next();
        }
      })

      .catch((err) => {
        console.log(err);
        res.status(500).json({msg: `Internal server is an error!`,err});
      });
  } else {
    res.status(401).json({ msg: `Invalid access token!` });
  }
}

function authorize(req, res, next) {
  const id = +req.params.id;

  Product.findOne({ where: { id } })
    .then((data) => {
      if (data) {
        const valid = req.Seller.id === Product.SellerId;
        if (valid) {
          next();
        } else {
          res.status(401).json(`Unauthorized`);
        }
      } else {
        res.status(401).json(`Unauthorized`);
      }
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json({ msg: `Internal server is an error!` });
    });
}

module.exports = {
  authenticate,
  authorize,
};
