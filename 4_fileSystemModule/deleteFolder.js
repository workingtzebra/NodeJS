const fs=require('fs')
fs.rmdir('tutorial',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Folder Deleted Successfully!\n")
    }
})