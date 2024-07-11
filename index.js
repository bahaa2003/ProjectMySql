import express from "express";
const app = express();
import cors from "cors";
const port = 3000;
app.use(cors());
app.use(express.json());


import getAllProduct from "./src/modules/product/productrouter.js";
import getSingelProduct from "./src/modules/product/getSingelProduct.js";
import addProduct from "./src/modules/product/addProduct.js";
import updateProduct from "./src/modules/product/updateProduct.js";
import deleteProduct from "./src/modules/product/deleteProduct.js";

app.use(getAllProduct);
app.use(getSingelProduct);
app.use(addProduct);
app.use(updateProduct);
app.use(deleteProduct);


app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
