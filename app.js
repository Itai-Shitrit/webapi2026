const express=require('express') // חיבור לספריית אקפרס
const app=express(); // יצירת אפליקצית אקספרס
const routerProduct=require('./api/v1/routes/products'); // ייבוא של הראוטר של המוצרים
const morgan=require('morgan');
const myLog=require('./api/v1/middlewares/myLog'); // צירפנו את שכבת הלוג שבנינו

// ניצור שכבת ביניים משלנו middleware

// const myLog=(req,res,next)=>{
//     console.log(`${req.}`);
// }
// app.use((req,res,next)=>{
//     const arrAllowList=['127.0.0.1','::1'];
//     for(let i=0; i<arrAllowList; i++)
//     {
//         if(arrAllowList[i]==req.ip)
//             {
//                 next();
//             }
//     }
//     return res.status(401).json({msg:`You Are Not Allowed`})
// });
// app.use((req,res,next)=>{
//     if(req.method=='GET' && req.path=='/product')
//     {
//         return res.status(200).json({msg:'all products'});
//     }
//     else{
//         next();
//     }
// });


app.use(myLog); // הוספת שכבת הלוג שצירפנו אל האפליקציה
app.use(morgan('dev')); // הוספת שכבה שמבצעת רישום של כל בקשה במערכת אל הקונסול, משמש אותנו לצורך מעקב ובקרה
//נוסיף שכבת ביניים שמטפלת בגוף של הבקשה הנשלחת בפורמט גייסון
app.use(express.json());
//נוסיף שכבת ביניים שמטפלת בגוף של הבקשה הנשלחת בפורמט יו.אר.אל אנקודד
app.use(express.urlencoded());
app.use('/product',routerProduct); // שילוב של הראוטר מוצרים 
 

module.exports=app; // יצא של המודול שכתבנו

//new comment