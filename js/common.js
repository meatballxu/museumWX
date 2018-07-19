var tagInitial = 0;
function switchShow(tabs,content,$obj) {
	if(!$obj.hasClass("on")) {
		$(tabs).removeClass("on");
		$obj.addClass("on");
		$(content+" > .ct").hide();
		$("#"+$obj.attr("data-tar")).fadeIn();
	}
//	if($obj.closest(".tabs-nav").hasClass("fix")) {
//		$('body').scrollTop(tagInitial)
//	}
}
$(".switchBar a").click(function(){
	if(!$(this).hasClass("on")) {
		$(".switchBar a").removeClass("on");
		$(this).addClass("on")
	}
});

function initTab() {
	$(".tabs-nav .arrow").bind("click",function(){
		if(!$(".tabs-nav .arrow").hasClass("on")) {
			openTab();
		}else {
			closeTab();
		}
	});
	$(".tabs-nav li").click(function(){
		$clickli = $(this);
		$clicklink = $clickli.find("a");
		$tablink = $(".tabs-nav > a").eq(2);
		$tablink.remove();
		$clicklink.remove();
		$(".tabs-nav>a").eq(1).after($clicklink);
		$clickli.append($tablink);
		closeTab();
		switchShow(".tabs-nav a",".tabs-content",$clicklink);
	})
	$(".tabs-nav li a").click(closeTab);
	var tabTop = $(".tabs-nav").offset().top;
	//固定菜单栏
	var divOffsetTop = 100;
	window.onscroll=function(){
		// 计算页面滚动了多少（需要区分不同浏览器）    
		var topVal = 0;    
		if(window.pageYOffset){//这一条滤去了大部分， 只留了IE678    
			topVal = window.pageYOffset;
		}
		if(topVal <= tabTop){    
			$(".tabs-nav.fix").removeClass("fix");
		}    
		else {
			$(".tabs-nav").addClass("fix");
			if(tagInitial==0) tagInitial = topVal;
		}
		if(topVal <= divOffsetTop){    
			$(".main-menu.fix").removeClass("fix");
		}    
		else {
			if($(".main-menu").hasClass("open")){
				closeMenu();
			}
			if($(".main-menu .searchBox").is(':visible')){
				closeSearch();
			}
			$(".main-menu").addClass("fix");
		}    
	};
	
}
function closeTab() {
	$(".tabs-nav .arrow").removeClass("on");
	$(".tabs-nav ul").hide();
}
function openTab() {
	$(".tabs-nav .arrow").addClass("on");
	$(".tabs-nav ul").show();
}
//闪现泡泡（弹出一秒消失）callPop(状态码,要显示的字符串)
//状态码说明 0:失败 1:成功 2:

var popTal=false;
function callPop(status,txt) {
	$("body").append("<div class='popWin'><div class='txt'><span>"+txt+"</span></div></div>");
	switch(status){
		case 0:
			$(".popWin").addClass("failure");
			break;
		case 1:
			$(".popWin").addClass("success");
			break;
	}
	$(".popWin").fadeIn(function() {
		if (popTal) {
			clearTimeout(popTal);
		}
		popTal= window.setTimeout(function(){
				$(".popWin").remove();
				popTal=true;
			},2000);
		
	});
}
