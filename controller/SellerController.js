const { Seller } = require("../models");

const { comparePassword } = require("../helpers/bcrypt");
const { generateToken } = require("../helpers/jwt");

class SellerController {
  static postRegister(req, res) {
    console.log(`masuk register`);
    const { name, email, password, telepon, rekening } = req.body;

    Seller.create({
      name,
      email,
      password,
      telepon,
      rekening,
    })

      .then((data) => {
        console.log(`ini masuk then`);
        let Seller = {
          id: data.id,
          name: data.name,
          email: data.email,
        };
        res.status(201).json({ msg: `Seller berhasil dibuat!`, Seller });
      })

      .catch((err) => {
        console.log(err, `<<<ini masuk error`);
        res.status(500).json({ msg: `Internal server is an error!` });
      });
  }

  static postLogin(req, res) {
    const {email, password} = req.body;
    Seller.findOne({
      where: {
        email : email,
      },
    })

      .then((data) => {
        if (data) {
          let checkPassword = comparePassword(password, data.password);
          let payload = {
            id: data.id,
            email: data.email,
          };
          if (checkPassword) {
            const access_token = generateToken(payload);
            res.status(200).json({ access_token });
          } else {
            res.status(401).json({ msg: `Invalid email/password` });
          }
        } else {
          res.status(401).json({ msg: `Invalid email/password` });
        }
      })

      .catch((err) => {
        console.log(err);
        res.status(500).json({ msg: `Internal server is an error!` });
      });
  }
}

module.exports = SellerController;
