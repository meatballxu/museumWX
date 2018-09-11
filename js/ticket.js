
$(document).on("click",".ticketlist .tick",function(){
	var $tk = $(this);
	var $body = $tk.find(".body");
	if(!$body.is(':visible')){
		$tk.find(".body").slideDown();
	}else {
		$tk.find(".body").slideUp();
	}
	
});

$(document).on("click",".ticketlist .checkOR",function(){
	$(".orLayer").fadeIn();
});
$(".orLayer .close").click(function(){
	$(".orLayer").fadeOut();
});