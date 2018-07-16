
$(".tabs-nav a").click(function(){
	switchShow(".tabs-nav a",".tabs-content",$(this));
});
$(".addtofav").click(function(){
	$(this).toggleClass("on");
});
$(".educationIndex .detailBox img,.educationIndex .detailBox .topic").click(function(){
	window.location.href = $(this).closest(".detailBox").attr("data-tar");
});

$(".ckMore").click(function(){
	var $ck = $(this);
	if($ck.hasClass("on")) {
		$ck.removeClass("on");
		$ck.closest(".newsText").find("p").addClass("default");
		$ck.closest(".moreContent").find("div:first-child").addClass("default");
	}else {
		$ck.addClass("on");
		$ck.closest(".moreContent").find("div:first-child").removeClass("default");
	}
	
});