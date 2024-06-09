const http = require('http');


const server = http.createServer((req, res) => {
    
    res.statusCode = 200;
    
   
    res.setHeader('Content-Type', 'text/html');
    
    
    const message = '<html><body><h1>questo è il tuo server!</h1></body></html>';
    res.end(message);
});


const port = 3000;
server.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});