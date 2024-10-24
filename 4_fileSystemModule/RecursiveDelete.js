const fs=require('fs');
fs.readdir('tutorial',(err, filesArray)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log(filesArray);
        for(let file of filesArray){
            fs.unlink('./tutorial/'+file,(err)=>{
                if (err){
                    console.log(err);
                }
                else{
                    console.log(file, ' deleted Successfully!');
                }
            })

        }
        fs.rmdir('tutorial',(err)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log("Folder deleted recirsively!")
            }
        })
    }
})