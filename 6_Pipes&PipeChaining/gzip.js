const fs=require('fs');
const readStream=fs.createReadStream('./example.txt','utf8');
// const writeStream=fs.createWriteStream('example2.txt');
const writeStream=fs.createWriteStream('example2.gz');
// readStream.on('data',(chunk)=>{
// console.log(chunk);
// writeStream.write(chunk);})


// readStream.pipe(writeStream);//shortcut source-> destinition

//now zlib is for compressing files
const zlib=require('zlib');
//now tranform stream-> takes input and maniplates data (compression in this case)
const gzip=zlib.createGzip();
// readStream.pipe(gzip).pipe(writeStream);
const  gunzip=zlib.createGunzip();

