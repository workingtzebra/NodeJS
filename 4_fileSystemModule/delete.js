const fs=require('fs');
fs.unlink('example.txt', (err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Successfully deleted the file!\n");
    }
})