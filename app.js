require('dotenv').config(); //הפעלת הפונקציה שטוענת את קובץ דוט איאנוי
const express=require('express') // חיבור לספריית אקפרס
const app=express(); // יצירת אפליקצית אקספרס
const routerProduct=require('./api/v1/routes/products'); // ייבוא של הראוטר של המוצרים
const routerUser=require('./api/v1/routes/user'); // ייבוא של הראוטר של המשתמשים
const routerCategory=require('./api/v1/routes/category'); // ייבוא של הראוטר של הקטגוריות
const morgan=require('morgan');
const myLog=require('./api/v1/middlewares/myLog'); // צירפנו את שכבת הלוג שבנינו
//const jwt=require('jsonwebtoken');
const auth=require('./api/v1/middlewares/auth');
const mongoose=require('mongoose');

const connStr=`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_SRV}/ecomdb`; 
mongoose.connect(connStr).then((conn)=>{
    console.log('Connected Successfully')
}); // יצירת חיבור לבסיס הנתונים

app.use(myLog); // הוספת שכבת הלוג שצירפנו אל האפליקציה
app.use(morgan('dev')); // הוספת שכבה שמבצעת רישום של כל בקשה במערכת אל הקונסול, משמש אותנו לצורך מעקב ובקרה
//נוסיף שכבת ביניים שמטפלת בגוף של הבקשה הנשלחת בפורמט גייסון
app.use(express.json());
//נוסיף שכבת ביניים שמטפלת בגוף של הבקשה הנשלחת בפורמט יו.אר.אל אנקודד
app.use(express.urlencoded({extended:true}));

app.use('/product',routerProduct); // שילוב של הראוטר מוצרים 
app.use('/user',routerUser); // שילוב של הראוטר משתמשים 
app.use('/category',routerCategory); // שילוב של הראוטר קטגוריות 

module.exports=app; // יצא של המודול שכתבנו