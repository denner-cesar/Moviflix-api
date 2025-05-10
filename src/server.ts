import * as http from 'http';
const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
   res.setHeader('Content-Type', 'text/plain');
 
   if (req.url === '/') {
       res.statusCode = 200;
       res.end('Home page');
   } else if (req.url === '/sobre') {
       res.statusCode = 200;
       res.end('About page');
   }
});
server.listen(3000, () => {
 console.log(`Servidor em execução em http://localhost:3000/`);
});