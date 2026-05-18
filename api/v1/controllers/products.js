const mySqlDB=require('../models/mySqlDB')
module.exports={
    getAll:(req,res)=>{
        const sql='select * from t_product';
        mySqlDB.query(sql,(err,results,feilds)=>{
            if(err==null)
            {
             console.log(results);
             return res.status(200).json(results);
            }
            else
            {
             console.log(err);
             return res.status(500).json({'error':err.message});
            }
   
}); //הפעלת השאילתה וקבלת התוצאות בתוך פונקציית החזרה;
},
    
    getById:(req,res)=>{
    const pid=req.params.id; // קבלת קוד המוצר שנשלח
    const sql=`select * from t_product where pid=${pid}`;
        mySqlDB.query(sql,(err,results,feilds)=>{
            if(err==null)
            {
             console.log(results);
             return res.status(200).json(results);
            }
            else
            {
             console.log(err);
             return res.status(500).json({'error':err.message});
            }
});
},
    add:(req,res)=>{
    // הוספת מוצר חדש
     res.status(200).json({msg:`Your Product Successfully Added`});},
    
    update:(req,res)=>{
    const pid=req.params.id; // קבלת קוד המוצר שנשלח
     res.status(200).json({msg:`Your Product Successfully Updated`});},
    
    delete:(req,res)=>{
    const pid=req.params.id; // קבלת קוד המוצר שנשלח
    const sql=`delete from t_product where pid=${pid}`;
        mySqlDB.query(sql,(err,results,feilds)=>{
            if(err==null)
            {
             console.log(results);
             return res.status(200).json(results);
            }
            else
            {
             console.log(err);
             return res.status(500).json({'error':err.message});
            }
            //איתי שטרית
});
    }}