const bcrypt=require('bcrypt'); //קישור לספריית ביקריפט
const pass="iii";
const roundSalt=10;
bcrypt.hash(pass,roundSalt).then((hashPass)=>{

console.log(hashPass);

});

let hashPass="$2b$10$skfdlflUiB5IMSNEVZFz4OD2uDi6eaWdw9jMhkU/P/EZYsVgonS";
bcrypt.compare(pass,hashPass).then((status)=>{

    if(status)
        console.log('Good');
    else
        console.log('Not Good');
});