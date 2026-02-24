const http = require('http');
const fs = require('fs');
const path = require('path');
// apis.........
const saludoRoute = require('./routes/saludo');


const server = http.createServer((req, res) => {
  console.log(req.method, req.url);
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
  
  else if   (req.url.startsWith('/api/saludo')) {
    return saludoRoute(req, res);
  }
  
  else if (req.url.startsWith('/')) {
    const filePath = path.join(__dirname, 'public', req.url);
    const ext = path.extname(filePath);
    const mimeTypes = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'text/javascript',
      '.json': 'application/json',
      '.png': 'image/png',
      '.ico': 'image/x-icon',
      '.jpg': 'image/jpeg'
    };
    const contentType = mimeTypes[ext] || 'text/plain';


    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end();
        return;
      }

      res.writeHead(200, {
        'Content-Type': contentType
      });

      res.end(data);
  });
}
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Servidor corriendo');
});