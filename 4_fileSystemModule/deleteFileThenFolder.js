const fs=require('fs');
fs.unlink('./tutorial/example.txt', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully deleted the file!\n");
        fs.rmdir('tutorial',(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("Folder Deleted Successfully!\n")
            }
        })
    }
})