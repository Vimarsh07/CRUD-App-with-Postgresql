const Pool=require('pg').Pool;
//require('dotenv').config();
const pool=new Pool({
    user:process.env.USER||"postgres",
    host:process.env.HOST || "localhost",
    database:process.env.DATABASE||"crudmvc",
    password:process.env.PASSWORD||"vim123",
    port:process.env.PORT||"5432",});
pool.connect((err)=>{
    if(!err){
        console.log("database connection succeeded");
    }else{
        console.log("database connection failed"+err);
    }
  });

module.exports = pool;