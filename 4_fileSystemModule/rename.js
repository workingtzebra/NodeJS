const fs=require('fs');
fs.rename('renamed_example.txt', 'example.txt', (err)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log("Successfully renamed the file\n");
    }
})


fs.appendFile('example.txt',"\nI am learning to append the file hehe",(err)=>{
    if (err){
        console.log(err);
    }
    else{
        console.log("Successfully appended data to file!\n");
    }
})