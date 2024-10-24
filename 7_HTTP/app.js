const http = require('http')
const server = http.createServer((req, res) => {
    // res.end('Hello World\n')
    // res.write("Hello World from NodeJS");
    // res.end()
    if (req.url=='/'){
        res.write("Hello World from NodeJS");
        res.end();
    }
    else{
        res.write('Using some other domain\n')
        res.end()
    }

})


server.listen('3000')