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


// 中间的
var seach = $('#textTag');
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


$.getJSON('http://10.0.156.250:8888/cityWalk',function(data){
  console.log(data);

  	for(var i=0;i<data.length;i++){
  		//建ul
  		var ulTag = $('<ul></ul>');
  		//ul下的li
  		var liTag = $('<li></li>');
  		//li下的img
  		var imgTag = $('<img/>').attr('src',data[i].imgurl);
  		//img进li
  		$(liTag).append(imgTag);
  		//li下的div
  		var divTag = $('<div></div>').addClass('right_div');
  		//div下的p
  		var pTag = $('<p></p>');
  		//建p下的span
  		var spanTag1 = $('<span></span>').text(data[i].address).attr('id','span1');
  		var spanTag2 = $('<span></span>').text(data[i].soldCount +'件已售').attr('id','span2');
  		var spanTag3 = $('<span></span>').text(data[i].browseCount +'次浏览').attr('id','span2');
  		//span进p
  		$(pTag).append(spanTag1,spanTag2,spanTag3);

  		//p进div
  		$(divTag).append(pTag);
  		//div下的h2
  		var h2Tag = $('<h2></h2>').text(data[i].title);
  		//h2进div
  		$(divTag).append(h2Tag);

  		//div下的div
  		var divTag2 = $('<div></div>').attr('id','con');
  		//divTag2下的span
  		for(var j = 0;j<data[i].introduce.length;j++){
  			var spanTag4 = $('<span></span>').text(data[i].introduce[j]);
  			$(divTag2).append(spanTag4);
  		}
  		//label进div
  		var label1 = $('<label></label>').text(data[i].newPrice);
  		$(divTag2).append(label1);
  		//labe2进div
  		var label2 = $('<label></label>').text(data[i].oldPrice);
  		$(divTag2).append(label2);

  		//div2进div
  		$(divTag).append(divTag2);

  		var label3 = $('<label></label>').text('立即订阅');
  		$(divTag).append(label3);

  		//div进li
  		$(liTag).append(divTag);

  		//li进ul
  		$(ulTag).append(liTag);
  		//ul进div
  		$('.main').append(ulTag);
  	}
});

//滚动条
function scrollFn(){
 return document.body.scrollTop || document.documentElement.scrollTop;
}
  var he = $(document.body).scrollTop();
  console.log(he);


window.onscroll = function(){

	var scroll = scrollFn();

	if(scroll >= 400){
		//console.log('aa'
         $('#square').fadeIn(200);
         if(scroll >= he ){
           console.log(he);
         	 $('#TOP').fadeIn(200);
         }else{
         	$('#TOP').fadeOut(200);
         }

	}else{

		$('#square').fadeOut(200);
		$('#TOP').fadeOut(200);
	}
}
