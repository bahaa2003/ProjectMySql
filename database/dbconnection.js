import { createConnection } from 'mysql2'
export const qurey = createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'firstprojectrev'
})