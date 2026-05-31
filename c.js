const jwt=require('jsonwebtoken');
const data ={Uid:5, Email:"a@a"}; // הגדרת התוכן להצפנה
const pk="ItaiShitrit";  // הגדרת המפתח הפרטי שיובל בתהליך ההצפנה
const token=jwt.sign(data,pk,{expiresIn:'1h'}); // הצפנת התוכן וקבלת הטוקן המייצג את ההצפנה
console.log(token);

try{
const newData=jwt.verify(token,pk);
console.log(newData);
}
catch(err)
{
    console.log("No Good Data");
}