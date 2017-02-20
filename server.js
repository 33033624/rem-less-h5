var express = require('express');
var app= express();
var path = require('path');
app.use(express.static(path.resolve('public')));
app.get('/',function(req,res){
    res.send('../index.html','utf8')
});




app.listen(9090);