document.writeln("		<div class=\'main-menu\' style=\'display:none\'>");
document.writeln("			<div class=\'logo\'></div>");
document.writeln("			<div class=\'opline\'>");
document.writeln("				<a class=\'lan cn\' href=\'javascript:\'><span class=\'lan-en\'>EN</span><span class=\'lan-cn\'>CN</span></a>");
document.writeln("				<span></span>");
document.writeln("				<a class=\'search-btn\' href=\'javascript:\'><i class=\'iconfont icon-chazhao\'></i></a>");
document.writeln("				<a class=\'login userhead\' href=\'#\'><img src=\'../img/ep/head.jpg\' /></a>");
document.writeln("				<a class=\'more\' href=\'javascript:\'><i class=\'iconfont icon-gengduocaidan\'></i></a>");
document.writeln("			</div>");
document.writeln("			<div class=\'overlay ma10\' style=\'display: none;\'></div>");
document.writeln("			<div class=\'item ma10\'>");
document.writeln("				<a href=\'#\'>参观</a>");
document.writeln("				<a href=\'#\'>展览</a>");
document.writeln("				<a href=\'#\'>学术</a>");
document.writeln("				<a href=\'#\'>公共项目</a>");
document.writeln("				<a href=\'#\'>艺术商店</a>");
document.writeln("				<a href=\'#\'>会员</a>");
document.writeln("				<a href=\'#\'>X-Space</a>");
document.writeln("				<a href=\'#\'>资讯</a>");
document.writeln("				<a href=\'#\'>关于XPM</a>");
document.writeln("				<a class=\'logstate\' href=\'#\'><span class=\'logout\'>登录</span><span class=\'login\'>退出登录</span></a>");
document.writeln("			</div>");
document.writeln("			<div class=\'searchBox\' style=\'display: none;\'>");
document.writeln("				<div class=\'search\'>");
document.writeln("					<input class=\'keywords\' type=\'text\' placeholder=\'您想搜索什么？\' />");
document.writeln("					<a class=\'btn\' href=\'#\'>搜 索</a>");
document.writeln("				</div>");
document.writeln("			</div>");
document.writeln("		</div>");

//初始化菜单：绑定事件 0为白底菜单；1为透明底菜单
function setNav(st) {
	if(st==1) {//透明底菜单
		$(".main-menu").addClass("transparent");
	}
	//固定菜单栏
	var divOffsetTop = 120;
	window.onscroll=function(){
		// 计算页面滚动了多少（需要区分不同浏览器）    
		var topVal = 0;    
		if(window.pageYOffset){  
			topVal = window.pageYOffset;
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
	$(".main-menu .more").click(function(){
		if(!$(".main-menu").hasClass("open")){
			closeSearch();
			openMenu();
		}else closeMenu();
	});
	$(".main-menu .search-btn").click(function(){
		if(!$(".main-menu .searchBox").is(':visible')){
			closeMenu();
			openSearch();
		}else {
			closeSearch();
		}
	});
	$(".main-menu .overlay").click(function(){
		closeMenu();closeSearch();
	});
	$(".lan").click(function(){
		$(this).toggleClass("cn").toggleClass("en")
	});
	
	$(".main-menu").show();
}

function openMenu() {
	$(".main-menu").removeClass("fix").addClass("open");
	$(".overlay").show();
}
function closeMenu() {
	var topVal = 0;    
	if(window.pageYOffset) {
		topVal = window.pageYOffset;
	}else if(document.documentElement.scrollTop ) {
		topVal = document.documentElement.scrollTop;
	}    
	else if(document.body.scrolltop) {
		topVal = document.body.scrolltop;
	}
	if(topVal > 150) {
		$(".main-menu").addClass("fix");
	}
	$(".main-menu").removeClass("open");
	$(".overlay").hide();
}
function openSearch() {
	$(".main-menu").removeClass("fix");
	$(".main-menu .searchBox,.main-menu .overlay").show();
}
function closeSearch() {
	closeMenu();
	$(".main-menu .searchBox,.main-menu .overlay").hide();
}
//菜单切换成未登录
function logoutNav() {
	$(".main-menu").addClass("logout");
	$(".main-menu").removeClass("login");
}
//菜单切换成已登录
function loginNav() {
	$(".main-menu").addClass("login");
	$(".main-menu").removeClass("logout");
}