jQuery.noConflict();
jQuery(function($) {

    /* 图片添加响应式*/
    $('img').addClass('img-responsive');

    /*
     * 外部链接添加属性：target="_blank"
     */
    $('a[href^="http://"]').attr('target', '_blank');

    /**
     * 提取<time>标签中datetime属性
     * datetime为 yyyy-mm-dd 格式
     */
    $('time').each(function(index, el) {
        var datetime = $(this).attr('datetime').split('-');
        $(this)
            .find('.year').text(datetime[0]).end()
            .find('.month').text(datetime[1]).end()
            .find('.day').text(datetime[2]).end()
            .find('.year-month-day').text(datetime.join('.')).end()
            .find('.year-month').text(datetime[0] + '.' + datetime[1]).end()
            .find('.month-day').text(datetime[1] + '.' + datetime[2]);
    });

    /*
     * 导航栏跟随鼠标的滑块动画
     */
    // 变量
    var primaryNav = $('#primary-nav');
    var dynamicBottom = primaryNav.find('.dynamic-bottom');
    var navItems = primaryNav.find('li');
    var currentNavIndex = navItems.index(primaryNav.find('.current').parent('li'));
    // 每个菜单项的宽度
    var navItemWidth = navItems.width();
    dynamicBottom.width(navItemWidth - 20).css("margin", "0 10px");
    // 滑块移动到第index个菜单项
    var goToIndex = function(index) {
        dynamicBottom.stop().animate({
            left: navItemWidth * index + 'px'
        }, 100)
    };
    // 鼠标事件
    navItems.mouseover(function() {
        goToIndex(navItems.index($(this)));
    }).mouseout(function() {
        goToIndex(currentNavIndex);
    }).mouseout();

    /**
     * 下拉菜单
     */
    $('#dropdown-menu button').click(function() {
        primaryNav.stop().toggle('fast');
    });

    /*
     * 首页滑动图片
     */
    // 变量
    var slider = $('#slider');
    var sliderImages = slider.find('img');
    var sliderTitle = slider.find('.slider-title');
    if (sliderImages.length > 0) {
        // 初始化文字标题.
        sliderTitle.html('<span class="animated fadeInLeft">' + sliderImages[0].getAttribute('alt') + '</span>');
        // 插件：unslider
        slider.unslider({
            speed: 500, //  The speed to animate each slide (in milliseconds)
            delay: 3000, //  The delay between slide animations (in milliseconds)
            complete: function() {
                // 更新文字标题
                var dots = slider.find('ol');
                var currentImgIndex = dots.find('li').index(dots.find('.active'));
                var imgAltText = sliderImages[currentImgIndex].getAttribute('alt');
                sliderTitle.html('<span class="animated fadeInLeft">' + imgAltText + '</span>');
            }, //  A function that gets called after every slide animation
            keys: true, //  Enable keyboard (left, right) arrow shortcuts
            dots: true, //  Display dot navigation
            arrows: true, //  Display next & prev
            fluid: true //  Support responsive design. May break non-responsive designs
        });
        // 隐藏dots的数字
        slider.find('ol').addClass('reset').find('li').text('');
        // 追加arrows到滑动图片区域
        var sliderArrows = slider.append($('p.arrows')).find('.arrows');
        // arrows显示图标
        sliderArrows.hide()
            .find('.next').html('<i class="fa fa-angle-right"></i>').end()
            .find('.prev').html('<i class="fa fa-angle-left"></i>');
        // 鼠标悬停时显示arrows
        slider.hover(function() {
            sliderArrows.stop().fadeIn('normal');
        }, function() {
            sliderArrows.stop().fadeOut('normal');
        });
    }
    

    /**
     * 链接区域，鼠标悬停动画
     */
    // 左侧动画
    $('#linkarea .link-list li').find('a').hover(function() {
        $(this).addClass('animated swing');
    }, function() {
        $(this).removeClass('animated swing');
    });
    // 阅读更多动画
    $('#linkarea .news-list .more').hover(function() {
        $(this).addClass('animated jello');
    }, function() {
        $(this).removeClass('animated jello');
    });

    /**
     * 链接区域，首次出现在屏幕上的加载动画
     */
    $('#linkarea .col-md-4 li').addClass('wow fadeInUp').attr('data-wow-offset', '0');
    $('#linkarea .special-stu li').addClass('wow zoomIn').attr('data-wow-offset', '0');
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();
})
