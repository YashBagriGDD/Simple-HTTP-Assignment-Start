const http = require('http');

const htmlHandler = require('./htmlResponses.js');
// const textHandler = require('./textResponses.js');
// const jsonHandler = require('./jsonResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/page':
      htmlHandler.getPage2(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};


http.createServer(onRequest).listen(port);
console.log(`Listening on port: ${port}`);
