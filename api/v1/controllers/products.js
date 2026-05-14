module.exports={
    getAll:(req,res)=>{ res.status(200).json({msg:'All products'});},
    
    getById:(req,res)=>{
    const pid=req.params.id; // קבלת קוד המוצר שנשלח
    res.status(200).json({msg:`Got Product Id ${pid} `});},
    
    add:(req,res)=>{
    // הוספת מוצר חדש
     res.status(200).json({msg:`Your Product Successfully Added`});},
    
    update:(req,res)=>{
    const pid=req.params.id; // קבלת קוד המוצר שנשלח
     res.status(200).json({msg:`Your Product Successfully Updated`});},
    
    delete:(req,res)=>{
    const pid=req.params.id; // קבלת קוד המוצר שנשלח
     res.status(200).json({msg:`You Delete Product: ${pid} `});}
};