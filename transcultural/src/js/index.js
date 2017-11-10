jQuery.noConflict();
jQuery(function($) {

    // 导航栏
    var navigation = responsiveNav("#Hui-navbar", {
        customToggle: "#nav-toggle"
    });

    // 返回顶部
    $.Huitotop();

    // 首页轮播图
    $("#index-slider .slider").slide({
        mainCell: ".bd ul",
        titCell: ".hd li",
        prevCell: ".prev",
        nextCell: ".next",
        trigger: "click",
        effect: "leftLoop",
        // effect: "fold",
        autoPlay: true,
        delayTime: 850,
        interTime: 3000,
        pnLoop: false,
        titOnClassName:"active"
    });

    // 视频轮播图
    $("#index-vedio-list .slider").slide({
        mainCell: ".bd ul",
        titCell: ".hd li",
        trigger: "click",
        effect: "leftLoop",
        autoPlay: true,
        delayTime: 700,
        interTime: 3000,
        pnLoop: false,
        titOnClassName: "active"
    });

    // 滚动书目图片
    $("#index-book-list .rollpicshow").jCarouselLite({
		auto: 2000,         // 自动播放间隔时间
		speed: 500,         // 速度
		btnNext: ".next",   // 向前滚动
		btnPrev: ".prev",   // 向后滚动
		visible: 3          // 显示数量
    });
    
    // 图片遮罩
    $('.maskWraper').Huihover();

    // 滚动文字
    $("#index-notice").textSlider({
		line: 1,        // 一次滚动条数，跟li有关
		speed: 500,     // 速度
		timer: 3000     // 间隔时间
	});
})