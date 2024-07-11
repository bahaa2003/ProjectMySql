import express from 'express';
import { qurey } from '../../../database/dbconnection.js';
const router = express.Router()

export default router.put("/products", (req, res) => {
    const { id } = req.body;
    const { name, price, description } = req.body;
    qurey.execute(
      `update products set name='${name}' , price='${price}' , description='${description} where id=${id}`
    );
    res.json({ message: "success" });
  });