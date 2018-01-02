//顶部
// 顶部
$('.cer input').animate({
	width:'0px'
},10);

//顶部搜索
$('.cer').hover(function() {
	console.log('hover');
	$('.cer input').css('display','inline-block'). animate({
	 		width:'190px',
			display:'block'
			}, 300);
}, function() {
	$('.cer input').animate({
				width:'0px',
			}, 300);
});


//中间的
var seach = $('#searchText');
		seach.focus(function(){
			$('#menu').css('display','block');
		});
		seach.blur(function(){
			$('#menu').css('display','none');
		});
		seach.keyup(function(ev){

			var e = ev || event;
			if(e.keyCode == 38 || e.keyCode == 40){
				return;
			}
			var seachStr = seach.val();
			$.getJSON('http://restapi.amap.com/v3/assistant/inputtips?s=rsv3&key=fceb9f8df9c557673d762dc3b9a5ca6c&city=%E5%8C%97%E4%BA%AC&callback=?&platform=JS&logversion=2.0&sdkversion=1.3&appname=http%3A%2F%2Fbang.360.cn%2F&csid=DF4A0BE5-7971-4936-8B49-12C343FB4163&keywords='+seachStr,function(data){
			createTag(data);
			console.log(data);
			});
		});
		//解析获取到的数据
		function createTag(data){
			var ulTag = $('<ul></ul>');
			ulTag.css('display','block');
			for(inde of data.tips){
				var liTag = $('<li></li>');
				liTag.text(inde.name);
				$(ulTag).append(liTag);
				//修改输入框文字
				liTag.hover(function(){
				    $('#searchText').val($(this).text());
				})
			}
            var div = $('#menu');
            $(div).text('');
            $(div).append(ulTag);
		}
