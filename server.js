var http = require('http'),
    url  = require('url'),
    fs   = require('fs'),
    qs   = require('querystring'),
 express = require('express');

 var app = express();

  //向前端发送 main.html页面
  app.get('/main.html',function(req,res){
   console.log(req.path);
   var realPath = fs.realpathSync('./index'+req.path)
   console.log(realPath)
   res.sendFile(realPath);

  })


//secondheader.html
  app.get('/secondheader.html',function(req,res){
    console.log('secondddddddddd'+req.path);
  var bol = fs.existsSync('./cityWalk'+req.path);
  if(bol){
    var realPath = fs.realpathSync('./cityWalk'+req.path);
    res.sendFile(realPath);
    console.log('secondddddddddd'+req.path);
  }else{
    console.log('false');
  }
  });


//banner
app.get('/getBanner',function(req,res){
	console.log('aa')
   	var rs = fs.createReadStream('./banner.json');
    rs.pipe(res);

})

//menu
app.get('/getMenu',function(req,res){
	console.log('bb');
	var rs2 = fs.createReadStream('./menu.json');
	rs2.pipe(res);
});

//freewalk
app.get('/getWalk',function(req,res){
	console.log('cc');
	var rs3 = fs.createReadStream('./freeWalk.json');
	rs3.pipe(res);
})

//citywaalk
app.get('/cityWalk',function(req,res){
  console.log('dd');
	var rs4 = fs.createReadStream('./cityWalkList.json');
	rs4.pipe(res);
})


//通配路由
app.get('*',function(req,res){
  console.log(req.path);
	var bol = fs.existsSync('./index'+req.path);
	if(bol){
		var relPath = fs.realpathSync('./index'+req.path);
		res.sendFile(relPath);
	}else{
     var realPathc = fs.realpathSync('./cityWalk'+req.path);
     res.sendFile(realPathc);
   }

});



app.listen(8888,function(){
	console.log('服务器搭建成功')
})
