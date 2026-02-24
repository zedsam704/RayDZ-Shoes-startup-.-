const http = require('http');
const fs = require('fs');
const path = require('path');

const MIME = {
  'html': 'text/html', 'css': 'text/css', 'js': 'application/javascript',
  'png': 'image/png', 'jpg': 'image/jpeg', 'jpeg': 'image/jpeg',
  'webp': 'image/webp', 'svg': 'image/svg+xml', 'gif': 'image/gif',
  'ico': 'image/x-icon', 'json': 'application/json',
  'woff': 'font/woff', 'woff2': 'font/woff2', 'avif': 'image/avif'
};

const server = http.createServer((req, res) => {
  let url = req.url === '/' ? '/index.html' : decodeURIComponent(req.url.split('?')[0]);
  let filePath = path.join(__dirname, url);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found: ' + url);
      return;
    }
    const ext = path.extname(filePath).slice(1).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(3456, () => {
  console.log('Serving on http://localhost:3456');
});
