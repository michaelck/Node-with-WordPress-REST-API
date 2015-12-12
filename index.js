var express = require('express'),
    path = require('path'),
    jade = require('jade'),
    config = require('./config'),
    http = require('http');

var app = new express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  var options = {
  host: config.wpUrl,
  port: 80,
  path: '/wp-json/wp/v2/posts/',
  method: 'GET'
  };

  http.request(options, function(resp) {
    var docs;
    resp.setEncoding('utf8');
     resp.on('data', function (chunk) {
       if (docs === undefined){
         docs = chunk;
       } else{
         docs +=chunk;
       }
     });
     resp.on('end', function(){
       var jdocs = JSON.parse(docs);
       res.render('allPosts', {posts:jdocs, title: "All WordPress Posts"});
     });
  }).end();
});

app.get('/:id',function(req,res){

  var options = {
  host: config.wpUrl,
  port: 80,
  path: '/wp-json/wp/v2/posts/' + req.params.id,
  method: 'GET'
  };
  console.log(options.path);
  http.request(options, function(resp) {
    var docs;
    resp.setEncoding('utf8');
     resp.on('data', function (chunk) {
       if (docs === undefined){
         docs = chunk;
       } else{
         docs +=chunk;
       }
     });
     resp.on('end', function(){
       var jdocs = JSON.parse(docs);
       console.log(jdocs);
       res.render('postID', {post:jdocs, title: "Single WordPress Post"});
     });
  }).end();

});

app.listen(config.listen)
