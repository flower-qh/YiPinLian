window.onload = function(){
	//菜单内容切换
	
	var titles = document.getElementById("box-title").getElementsByTagName("li");
	var divs = document.getElementById("box_con").getElementsByTagName("section");
//	alert(titles.length);
	if(titles.length!=divs.length)
	return;
	for(var i=0;i<titles.length;i++){
		titles[i].id = i;
//		alert(this.id);
		
		titles[i].onclick = function(){
			
			for(var j=0;j<titles.length;j++){
				titles[j].className = '';
				divs[j].style.display = 'none';
			}
			
			this.className = 'action';
			divs[this.id].style.display = 'block';
			
		}
	}
	
	//新闻资讯页面跳转
	var box3Btn = document.getElementById("box3Btn");
	var mod1 = document.getElementById("mod1");
	var mod2 = document.getElementById("mod2");
	var mod3 = document.getElementById("mod3");
	var mod4 = document.getElementById("mod4");
	var mod6 = document.getElementById("mod6");
	
	box3Btn.onclick = function(){
		mod1.style.display = 'block';
		mod3.style.display = 'none'
		titles[0].className = "action"
		titles[2].className = '';
		
	}
	box3Btn1.onclick = function(){
		mod3.style.display = 'none'
		mod2.style.display = 'block';
		titles[1].className = "action"
		titles[2].className = '';
	}
	box3Btn2.onclick = function(){
		mod3.style.display = 'none'
		mod4.style.display = 'block';
		titles[3].className = "action"
		titles[2].className = '';
	}
	box3Btn3.onclick = function(){
		mod3.style.display = 'none'
		mod6.style.display = 'block';
		titles[5].className = "action"
		titles[2].className = '';
	}
	
}

