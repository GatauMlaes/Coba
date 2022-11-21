const http = require('http')
const os = require('os')
const fs = require('fs')

const memori = os.freemem()
console.log(memori);
const cpu = os.cpus()
const versi = os.version()
console.log(versi);

http.createServer((req,res) => {
    res.writeHead(200,{'Content-Type': 'text/html'})
    const url = req.url
    if(url == '/about'){
        res.write(`<h1>Your CPU IS ${cpu[1].model}</h1>`)
        
    }else if (url == '/window'){
        
        res.write(`<h1>Your ${versi}</h1>`)
    } else  {
        fs.readFile('./index.html' ,(err,data) => {
            if (err) {
                res.writeHead(404,{'Content-Type': 'text/html'})
                res.write('404 NOT FOUND')
                res.end()
            }
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write(data)
            res.end()
        })
        
    } 
   
    
}).listen(3000)