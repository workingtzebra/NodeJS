//readFile has to load entire thing in memory not feasible for large files
//Streams read in chunks 
const fs=require('fs');
const readStream=fs.createReadStream('./example.txt','utf8');
const writeStream=fs.createWriteStream('example2.txt');
readStream.on('data',(chunk)=>{
console.log(chunk);
writeStream.write(chunk);
});//here im doing parallel tasking
//im reading one file and writing to another
//but i am not waiting for the entire file to load 

