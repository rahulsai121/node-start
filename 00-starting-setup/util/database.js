const mysql=require('mysql2')

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'Rahul55555'
})

module.exports=pool.promise();