const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/') {

    const filePath = path.join(__dirname, 'public', 'index.html');

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error interno');
        return;
      }

      res.writeHead(200, { 
        'Content-Type': 'text/html; charset=utf-8'
      });

      res.end(data);
    });
  }
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Servidor corriendo');
});