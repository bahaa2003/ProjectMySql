import express from 'express';
import { qurey } from '../../../database/dbconnection.js';
const router = express.Router()

export default router.delete("/products", (req, res) => {
    const { id } = req.body;
    qurey.execute(`delete from products where id=${id}`);
    res.json({ message: "success" });
  });