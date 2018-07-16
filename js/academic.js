
$(".sec .focus").click(function(){
	$(this).toggleClass("on");
});

$(".academicIndex .detailBox").eq(0).find(".topic").click(function(){
	$(this).closest(".detailBox").find("ul.sec").toggle();
});

$(".academicIndex .detailBox:not(:first-child) .topic").click(function(){
	//alert($(this).closest(".detailBox").index())
	window.location.href=$(this).closest(".detailBox").attr("data-tar");
});