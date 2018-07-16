
function switchShow(tabs,content,$obj) {
	
	if(!$obj.hasClass("on")) {
		$(tabs).removeClass("on");
		$obj.addClass("on");
		$(content+" > .ct").hide();
		$("#"+$obj.attr("data-tar")).fadeIn();
	}
}
$(".switchBar a").click(function(){
	if(!$(this).hasClass("on")) {
		$(".switchBar a").removeClass("on");
		$(this).addClass("on")
	}
});

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
