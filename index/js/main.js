$(document).ready(function(){




	//banner
	$.getJSON("http://10.0.156.250:8888/getBanner",function(data){

		for(var i = 0 ; i< data.length; i++){
	      var liTag = $('<li></li>');
	      var numLi =$('<li></li>')
	      var aTag  = $('<a></a>').attr("href",data[i].href);
	      var imgTag = $('<img/>').attr({'src':data[i].imgUrl,'class':'bann_img'});
	      $(aTag).append(imgTag);
	      $(liTag).append(aTag);
	      $('.lunbo').append(liTag);
	      $('.num').append(numLi);
		}
		var index = 0;
		var size = $('.lunbo li').size();
//		console.log(size)
		$('.lunbo li').eq(0).show();
		$('.num li').eq(0).addClass('active');


		//鼠标移入
		$('.num li').mouseover(function(){
			$(this).addClass('active').siblings().removeClass('active');
			var n = $(this).index();
			index = n;
			$('.lunbo li').eq(index).fadeIn(300).siblings().fadeOut(300);
		})

		//自动
		index = 0;
		var timer = setInterval(move,1000);

		function move(){
			index ++;
			if(index == size){
				index = 0;
			}
			$('.num li').eq(index).addClass('active').siblings().removeClass('active');
			$('.lunbo li').eq(index).fadeIn(300).siblings().fadeOut(300);
		};
		//定时器开启关闭
		$('.bann').hover(function(){
			clearInterval(timer);
		},function(){
			timer = setInterval(move,1500);
		})

		//点击向左
		function moveLeft(){

            index--;
            if (index == -1) {
                  index = size-1;
            }
            $(".num li").eq(index).addClass("active").siblings().removeClass("active");
            $(".lunbo li").eq(index).fadeIn(300).siblings().fadeOut(300);

       };

		//点击左按钮
		$('.btn-left a img').click(function(){
			moveLeft()
		});
		//点击右按钮
		$('.btn-right a img').click(function(){
			move();
		})

	});


	//menu
	$.getJSON('http://10.0.156.250:8888/getMenu',function(data2){

//console.log(data2)
		for(var j = 0; j <data2.length; j++){


			var h =$('<h2></h2>');
			$(h).text(data2[j].title);
            $('.cer-bot').eq(j).append(h);


			var c_label = $('<label></label>').text(" > ");
			var p_tat = $('<p></p>')
			$(p_tat).append(c_label);
			$('.cer-bot').eq(j).append(p_tat);


			var b_tan = $('<div></div>').attr("class","ban-tan");
			$('.cer-bot').eq(j).append(b_tan);

			for(var n = 0 ; n<data2[j].mainCity.length;n++){
				var c_a = $('<a></a>').attr("href","#").text(data2[j].mainCity[n]);
				$(p_tat).append(c_a);

			}

			if(j == 5){
				var s_h2 =$('<h2></h2>').text(data2[5].title).css({
					fontSize:'26px',
					fontWeight:'bold',
					marginLeft:'30px'
				});
				$(b_tan).attr("width","400px")
				$(b_tan).append(s_h2);
//				console.log(data2[5].moreCity[0].items.length);
				for(var sn = 0 ; sn <data2[5].moreCity[0].items.length;sn++){
					var imgT = $('<img/>').attr('src',data2[5].moreCity[0].items[sn]).css({
						width:'100px',
						height:'100px',
						marginRight:'50px',
						marginTop:'14px',
						marginLeft:'20px'
					});
					$(b_tan).append(imgT)
				}
//
				}else{
			//dan
			for(var m = 0 ; m<data2[j].moreCity.length;m++){
				var b_all = $('<div></div>').attr("class","b-all")
				var b_h2 = $('<h2></h2>').text(data2[j].moreCity[m].cityName);
				var b_p  = $('<p></p>').attr('class','b_p');

				$(b_all).append(b_h2)
				$(b_all).append(b_p)
				$(b_tan).append(b_all);


//				console.log(data2[j].moreCity[m].item)
				for(var nu = 0 ; nu < data2[j].moreCity[m].items.length ;nu++){
					var b_a = $('<a></a>').text(data2[j].moreCity[m].items[nu]);
					if($(b_a).size() %2 ==0){
						$(b_a).attr('color','red')
					}
					$(b_p).append(b_a);
				}
			}


		  }
	}

	});



	$.getJSON('http://10.0.156.250:8888/getWalk',function(data){
		//建第一个ul data.length
		for(var i=0;i<data.length;i++){
			//建ul
			var ulTag = $('<ul></ul>');
			if (i>0) {
				$(ulTag).addClass('hide');
			}
			//建ul下第一、二个的li data[i].data.length
			for(var j=0;j<=data[i].data.length;j++){
				//创建最后一个Li
				if(j == data[i].data.length){
				//建li
				var liTag6 = $('<li></li>');
				$(liTag6).attr({
					class:'li2',
					id:'last'
				});
				//li里的h3
				var h3Tag6 = $('<h3></h3>').html('查看更多<br/>机酒自由行');
				//h3进li
				$(liTag6).append(h3Tag6);
				//建p
				var pTag6 = $('<p></p>');
				var aTag6 = $('<a></a>').attr('href','#');
				var imgTag6 = $('<img/>').attr('src','../images/arrowBg_30.gif');
				$(aTag6).append(imgTag6);
				$(pTag6).append(aTag6);
				//p进li
				$(liTag6).append(pTag6);
				//建ul
				var ulTag6 = $('<ul></ul>');
				   for(var m =0;m<4;m++){
				   	var liTag7 = $('<li></li>');
				   	var aTag7 = $('<a></a>').attr('href','#');
	          if(m==0){
							$(aTag7).text('机票');
						}else if(m == 1){
							$(aTag7).text('酒店');
						}
						else if(m == 2){
							$(aTag7).text('机+酒');
						}else if(m ==3){
							$(aTag7).text('邮轮');
						}
						liTag7.append(aTag7);
						$(ulTag6).append(liTag7);

				   }
				   //ul进li
				   $(liTag6).append(ulTag6);
				   $(ulTag).append(liTag6);

				}else{

					//建li
				var liTag = $('<li></li>');
				if(j==0){
					$(liTag).attr('class','li1');
				}else{
					$(liTag).attr('class','li2');
				}
				//建li下的img
				var imgTag = $('<img/>').attr('src',data[i].data[j].imgUrl);
				//img进li
				$(liTag).append(imgTag);
				var pTag = $('<p></p>').attr('id','mengban');
				//p进li
				$(liTag).append(pTag);
				//建div
				var divTag = $('<div></div>');
				if(j==0){
					$(divTag).attr('id','firstDiv');
				}else{
					$(divTag).attr('class','firstDiv');
				}
				//div下的p
				     var pTag2 = $('<p></p>').text('机票');
				//div下的span
				var spanTag = $('<span></span>').text('元起');
				var labelTag = $('<label></label>').text(data[i].data[j].price);
				//label 进span
	            $(spanTag).prepend(labelTag);
	            //p和psan进div
	            $(divTag).append(pTag2);
	            $(divTag).append(spanTag);
	            //div进li
	            $(liTag).append(divTag);

	            //下方div
	            var divTag2 = $('<div></div>');
	            if(j==0){
					$(divTag2).attr('id','secondDiv');
				}else{
					$(divTag2).attr('class','secondDiv');
				}
	            //div下的h4
	            var h4Tag = $('<h4></h4>').text(data[i].data[j].title);
	            //第一个li有时间，其他的没有时间
	            if(j==0){
	            	var pTag3 = $('<p></p>').text(data[i].data[j].time);
	            	//p进div
	            	$(divTag2).append(pTag3);
	            }
	            //h4进idv
	            $(divTag2).prepend(h4Tag);
	            //div进li
	            $(liTag).append(divTag2);

	            //li进ul
	            $(ulTag).append(liTag);

			}
	     $('#change').append(ulTag);

				}
		}
	});


	 var aArr = $('#selectChange a');
	 var flag = 0;
	for(var i=0;i<aArr.length;i++){
		(function(num){
				$(aArr[num]).on('mouseover',function(){
					var uls = $('#change>ul');
					if(flag==0){
						flag ++;
					  $(uls).eq(num).siblings().fadeOut(100);
					 $(uls).eq(num).delay(100).fadeIn(300,function(){
						$(uls).eq(num).siblings().css('display','none');
						flag = 0;
					});
					}
				});
		})(i);
	}




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


  });

//second
