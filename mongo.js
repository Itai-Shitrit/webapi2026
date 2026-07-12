require('dotenv').config(); // הפעלת פעולת טעינת הגדרות הקובץ דוט אי אנ וי
const mongoose=require('mongoose'); // קישור לספריית מונגוס

// הגדרת מחרוזת התחברות connection String:
const connStr=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_SRV}/ecomdb`; 


main();

async function  main() {
console.log(connStr); 
const conn=await mongoose.connect(connStr);
// productModel.insertOne({pid:4});
const data=await productModel.find();
console.log(data);
}
