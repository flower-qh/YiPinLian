
//显示第一张图片
$(".banner img").eq(0).show()

//手动控制轮播
$(".click i").click(function(){
	$(this).addClass("section").siblings().removeClass("section")
	var index = $(this).index();
	i=index;
	//	alert(index)  获取索引值
	$(".banner img").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300)
})
							
//banner自动轮播
var i = 0;
var t = setInterval(move, 3000)
$(".banner_img img").eq(0).show();

function move() {
	i++;
	if(i == 4) {
		i = 0;
	}

	$(".banner_img img").eq(i).fadeIn(300).siblings().fadeOut();
	$(".click i").eq(i).addClass("section").siblings().removeClass("section");
}

//核心向左运动函数
function moveL(){
	i--;
	if(i==-1){
	i=3;
}
					
$(".click i").eq(i).addClass("section").siblings().removeClass()
	$(".banner img").eq(i).fadeIn(300).siblings().fadeOut(300)
}
				
//按钮控制轮播
				
//左边按钮点击事件
$(".leftbtn").click(function(){
	moveL()
})
//右边按钮点击事件
$(".rightbtn").click(function(){
	move()
})
				
				
//定时器的开始与结束
$(".banner").hover(function(){
	clearInterval(t);
},function(){
	t=setInterval(move,1500);
})





//内容随屏幕滚动逐次加载
$(function(){
	var win_h = $(window).height() * 0.7;
	var ser_h = $(".head_box").offset().top
	

	$(window).scroll(function() {
			var top = $(window).scrollTop();
			//  头部
			if(top > ser_h - win_h) {
				$(".head_box").addClass("on")
			}
						
})	
})


$(function(){
	$("#bbtn").click(function(){		
		$("#list").slideToggle(300);
	})
})













