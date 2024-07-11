import express from 'express';
import { qurey } from '../../../database/dbconnection.js';
const router = express.Router()

export default router.get('/products', (req, res)=>{
    qurey.execute('select * from products', (err, data)=>{
        if(err){
            res.json({message:"Error",err})
        }else{
            res.json({message:"success",data});
        }
        
    })

})