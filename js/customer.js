jQuery.noConflict();
jQuery(function($) {
    
    /*
     * 外部链接添加属性：target="_blank"
     */
    $('a[href^="http://"]').attr('target','_blank');
    
    /*
     * 首页滑动图片
     */
    // 变量
    var slider = $('#slider');
    var sliderImages = slider.find('img');
    var sliderTitle = slider.find('h2');
    // 初始化文字标题.
    sliderTitle.text(sliderImages[0].getAttribute('alt'));
    // 插件：unslider
    slider.unslider({
        speed: 500,               //  The speed to animate each slide (in milliseconds)
        delay: 3000,              //  The delay between slide animations (in milliseconds)
        complete: function() {
            // 更新文字标题
            var dots = slider.find('ol');
            var currentImgIndex = dots.find('li').index(dots.find('.active'));
            var imgAltText = sliderImages[currentImgIndex].getAttribute('alt');
            sliderTitle.text(imgAltText);
        },  //  A function that gets called after every slide animation
        keys: true,               //  Enable keyboard (left, right) arrow shortcuts
        dots: true,               //  Display dot navigation
        arrows: true,
        fluid: true               //  Support responsive design. May break non-responsive designs
    });
    // 隐藏dots的数字
    slider.find('ol>li').text('');
    // 追加arrows到滑动图片区域
    var sliderArrows = slider.append($('p.arrows')).find('.arrows');
    // arrows显示图标
    sliderArrows.hide()
        .find('.next').html('<i class="fa fa-angle-right"></i>').end()
        .find('.prev').html('<i class="fa fa-angle-left"></i>');
    // 鼠标悬停时显示arrows
    slider.hover(function(){
        sliderArrows.stop().fadeIn('normal');
    },function(){
        sliderArrows.stop().fadeOut('normal');
    });
})