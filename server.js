const express = require('express');
const app = express();
const nav = require('./webring-nav');
const yaml = require('js-yaml');
const fs   = require('fs');
var url = require('url');
const pageList = yaml.safeLoad(fs.readFileSync('list.yaml', 'utf8'));

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/members', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get('/random', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify({ members: pageList }));
});

app.get('/prev', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify({ members: pageList }));
});

app.get('/next', function(request, response) {
  var url_parts = url.parse(request.url, true),
    memberUrl = url_parts.query.member;

    response.setHeader('Content-Type', 'application/json');

  response.send(JSON.stringify(nav.next(memberUrl)));
});


app.get('/list', function(request, response) {
  response.setHeader('Content-Type', 'application/json');
  response.send(JSON.stringify({ members: pageList }));
});


// listen for requests :)
const listener = app.listen(process.env.PORT || 8000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
