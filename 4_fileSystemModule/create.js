//create, delete,read,edit files
const fs=require('fs');
//create a file
fs.writeFile('./tutorial/example.txt','This is an example file', (err)=>{
if (err){
    console.log(err);
}
else{
    console.log("File is created Successfully!");
    //name, encoding type, callback function (error, file we want to read)
    //we get a biinary buffer stream if we do not specify encoding type
    fs.readFile('example.txt', 'utf8',(err, file)=>{
        if (err){
            console.log(err);
        }
        else{
            console.log(file);
        }
    })
}
})



//read it 
