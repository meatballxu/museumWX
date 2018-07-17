
$(".tabs a").click(function(){
	switchShow(".tabs a",".tab-content",$(this));
});
$("#setting .tag").click(function(){
	switchShow("#setting .tag",".tag-content",$(this));
});
