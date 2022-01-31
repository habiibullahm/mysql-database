const { Product } = require('../models')
// const Product = require('../models/product');

class ProductController {
  static postProduct (req,res) {
    const {name, category, stock, price, color, size} = req.body
    console.log('post product controller', res);
    const SellerId = res.seller.id;
    Product.create({
        name:res.seller.email,
        category,
        stock,
        price, 
        color, 
        size,
        SellerId:SellerId,
    })
    .then((data) => {
      res.status(201).json({ msg:
        `todo successfully created`,data
      })
    })
    .catch((err) => {
      console.log(`post produk error`, err);
      res.status(500).json({msg: `internal server is an error!`, err})
    })
  }
  static getProduct (req, res) {
    console.log('get product controller');
    Product.findAll()
    .then((data) => {
      if (!data) {
        res.status(500).json({msg: `Datanya kosong!`})
      }
      else {
        res.status(200).json({msg: data})
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({msg: `internal server is an error!`})
    })
  }

  static getOneProduct( req,res){
    Product.findOne({
      where : {
        id : req.params.id
      }
    })
    .then((data)=>{
      if(!data) {
        res.status(500).json({msg:`Datanya kosong!`})
      }
      else {
        res.status(200).json({msg: data})
      }
    })
    .catch((err)=>{
      console.log('findOne error', err);
      res.status(500).json({msg:'internal server is an error'})
    })
  }
  static putProduct (req,res) {
    console.log('put product controller');
    const id = req.params.id;
    const {name, category, stock, price, color, size} = req.body;
    
    Product.update({
      name,
      category,
      stock, 
      price, 
      color, 
      size},
      {where: {id},
      returning: true
    })

    .then((data) => {
      if (!data) {
        res.status(404).json({msg: `Product is not found`})
      }
      else {
        res.status(200).json({msg: `Successfully edited task id: ${id}`})
      }
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json({msg: `internal server is an error!`, err})
    })
  }
  static deleteProduct (req,res) {
    const id = +req.params.id;  
    console.log('delete id product controller');
    Product.destroy({
      where: {id},
    })

    .then((data) => {
      if (!data) {
        res.status(404).json({msg: `Product is not found`})
      }
      else {
        res.status(200).json({msg: `Product has been deleted id: ${id}`})
      }
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json({msg: `internal server is an error!`})
    })
  }
}
module.exports = ProductController;