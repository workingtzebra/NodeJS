const fs=require('fs');
const readStream=fs.createReadStream('example2.gz');
// const writeStream=fs.createWriteStream('example2.txt');
const writeStream=fs.createWriteStream('example2Unzip.txt', 'utf8');
const zlib=require('zlib');
//now tranform stream-> takes input and maniplates data (compression in this case)
const gzip=zlib.createGzip();
// readStream.pipe(gzip).pipe(writeStream);
const  gunzip=zlib.createGunzip();
readStream.pipe(gunzip).pipe(writeStream)