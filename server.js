const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./furniture.json');



server.use(
    jsonServer.rewriter({
      '/api/*': '/$1',
    })
);

server.use(router);

server.listen(8000, () => {
  console.log('Server is running on', 8000);
});
