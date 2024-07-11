import express from 'express';
import { qurey } from '../../../database/dbconnection.js';
const router = express.Router()

export default router.get('/products/:id', (req, res)=>{
    const {id} = req.params
    qurey.execute(`select * from products where id=${id} `, (err, data)=>{
        if(err){
            res.json({message:"Error",err})
        }else{
            res.json({message:"success",data});
        }
        
    })

})