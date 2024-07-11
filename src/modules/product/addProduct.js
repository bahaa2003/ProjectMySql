import express from 'express';
import { qurey } from '../../../database/dbconnection.js';
const router = express.Router()

export default router.post("/products", (req, res) => {
    const { name, price, description } = req.body;
    qurey.execute(
      `insert into products (name, price, description) values ('${name}', '${price}', '${description}')`
    );
    res.json({ message: "success" });
  });