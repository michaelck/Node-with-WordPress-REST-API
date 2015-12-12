var express = require('express'),
    path = require('path'),
    jade = require('jade'),
    config = require('./config'),
    http = require('http');

var app = new express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

// Shared options
var options = {
host: config.wpUrl,
port: 80,
method: 'GET'
};

app.get('/',function(req,res){

options.path = '/wp-json/wp/v2/posts/';

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

  options.path = '/wp-json/wp/v2/posts/' + req.params.id;

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
       res.render('postID', {post:jdocs, title: "Single WordPress Post"});
     });
  }).end();

});

app.listen(config.listen)
