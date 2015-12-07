var express = require('express'),
    path = require('path'),
    jade = require('jade');

var app = new express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res){
  res.render('layout');
});

app.listen(config.listen)
