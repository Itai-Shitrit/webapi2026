const mysql=require('mysql2');
const conn=mysql.createConnection(
{
    host:'localhost',
    user:'itai',
    password:'Is2626',
    port:'3306',
    database:'webapi'
}
); // יצירת אובייקט מסוג חיבור לבסיס הנתונים
module.exports=conn;

