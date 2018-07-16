var mySwiper = new Swiper('.swiper-container', {
	autoplay: false,
	direction : 'vertical',
	on: {
		slideChangeTransitionStart: function(){
			if(this.activeIndex==($(".swiper-wrapper").children(".swiper-slide").length-1)) {
				$(".index-nav-arrow-down").hide();
			}else {
				$(".index-nav-arrow-down").show();
			}
			if(this.activeIndex==0) {
				$(".index-nav-arrow-up").hide();
			}else {
				$(".index-nav-arrow-up").show();
			}
		},
		slideChangeTransitionEnd: function(){
			$(".swiper-slide .animated").addClass("hide");
			$(".swiper-slide").eq(this.activeIndex).find(".animated").removeClass("hide");
		},
	},
})
$(".index-nav-arrow-down,.index-nav-arrow-up").hover(function(){
		$(this).removeClass("animated");
	},function(){
		$(this).addClass("animated");
});
$(".index-nav-arrow-up").click(function(){
	 mySwiper.slidePrev();
});
$(".index-nav-arrow-down").click(function(){
	 mySwiper.slideNext();
});
