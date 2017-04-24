$(function() {

    // 导航栏鼠标悬停
    $('#primary-menu>li').hover(function() {
        $(this).find('.sub-menu').slideDown('fast');
    }, function() {
        $(this).find('.sub-menu').slideUp('fast');
    })

    // 客服服务鼠标悬停
    var originalSize = parseInt($('#service').find('i').css('font-size'));
    $('#service ul>li').hover(function() {
        $(this).find('i').animate({ fontSize: (originalSize + 8) + 'px' }, 'fast');
    }, function() {
        $(this).find('i').animate({ fontSize: originalSize + 'px' }, 'fast');
    });

    // 定义一些常用的变量
    var sliderImg = $('#slider-img');
    var sliderDots = $('#slider-dots').empty();
    var sliderIntro = $('#slider-intro span');
    var imgNum = sliderImg.find('li').length;
    var imgWidth = sliderImg.parent().width();
    var currentImg = 0;
    // 根据图片数量，初始化导航点
    for (var i = 0; i < imgNum; i++) {
        sliderDots.append('<span class="dot"></span>')
    }
    sliderDots.find('span:first-child').addClass('active'); // 第一个导航点处于活动状态
    // 初始化图片标题
    sliderIntro.text(sliderImg.find('img:eq(0)').attr('alt'));

    // 下一张图片
    function slideToNext() {
        // 更新图片
        if (sliderImg.is(':animated')) return false;
        if (currentImg == imgNum - 1) {
            sliderImg.animate({ left: 0 }, 'slow');
            currentImg = 0;
        } else {
            sliderImg.animate({ left: '-=' + imgWidth }, 'slow');
            currentImg++;
        }
        // 更新导航点和标题
        updateDotsAndTitle(currentImg);

    }
    // 上一张图片
    function slideToPrev() {
        // 更新图片
        if (sliderImg.is(':animated')) return false;
        if (currentImg == 0) {
            sliderImg.animate({ left: -(imgNum - 1) * imgWidth }, 'slow');
            currentImg = imgNum - 1;
        } else {
            sliderImg.animate({ left: '+=' + imgWidth }, 'slow');
            currentImg--;
        }
        // 更新导航点和标题
        updateDotsAndTitle(currentImg);
    }
    // 更新导航点和标题
    function updateDotsAndTitle(imgIndex) {
        sliderDots.find('span:eq(' + imgIndex + ')')
            .addClass('active')
            .siblings().removeClass('active');
        var intro = sliderImg.find('img:eq(' + imgIndex + ')').attr('alt');
        sliderIntro.fadeOut('fast', function() {
            $(this).text(intro)
        }).fadeIn('fast');
    }

    // 轮播按钮、导航点点击事件
    $('#next').click(slideToNext);
    $('#prev').click(slideToPrev);
    sliderDots.find('.dot').click(function(event) {
        var targetImg = sliderDots.find('.dot').index($(this));
        if (targetImg == currentImg) return;
        sliderImg.animate({ left: "-=" + (targetImg - currentImg) * imgWidth }, 'slow');
        updateDotsAndTitle(targetImg);
        currentImg = targetImg;
    });

    // 自动轮播
    var timer = setInterval(slideToNext, 3000);
    // 鼠标移到组件上，暂停轮播，显示上一张/下一张
    $('#slider-container').hover(function() {
        clearInterval(timer);
        if (!$('#prev').is(':animated')) {
            $('#prev').animate({ left: 50 }, 'fast');
        }
        if (!$('#next').is(':animated')) {
            $('#next').animate({ left: 1000 }, 'fast');
        }
    }, function() {
        timer = setInterval(slideToNext, 3000);
        if (!$('#prev').is(':animated')) {
            $('#prev').animate({ left: -50 }, 'fast');
        }
        if (!$('#next').is(':animated')) {
            $('#next').animate({ left: 1100 }, 'fast');
        }
    });

    // 头部搜索的表单
    var searchInput = $('#search input[type="text"]');
    $('#search').submit(function(event) {
        alert('你已提交');
    });
    $('#submit-search').click(function(event) {
        if (!searchInput.val()) return;
        $('#search').submit();
    });
    var originBgColor = searchInput.css('background-color');
    searchInput.focus(function(event) {
        $(this).addClass('input-focus');
        if ($(this).val()==this.defaultValue) {
            $(this).val("");
        }
    }).blur(function(event) {
        $(this).removeClass('input-focus');
        if ($(this).val()=="") {
            $(this).val(this.defaultValue);
        }
    });
})

/*
	window.onload 注册函数
*/
function addLoadEvent(func, args) {
    var oldFunc = window.onload;
    if (typeof window.onload != "function") {
        window.onload = function() {
            func(args);
        }
    } else {
        window.onload = function() {
            oldFunc();
            func(args);
        }
    }
}

/*
	弹性返回顶部
	页面滚动条处于低端,点击回到顶部，并且隐藏掉
*/
function goToTop() {
    var obj = document.getElementById("go-to-top");

    function getScrollTop() {
        return document.documentElement.scrollTop + document.body.scrollTop;
    }

    function setScrollTop(value) {
        if (document.documentElement.scrollTop) {
            document.documentElement.scrollTop = value;
        } else {
            document.body.scrollTop = value;
        }
    }

    function handleWindowScroll() {
        getScrollTop() > 0 ? obj.style.display = "block" : obj.style.display = "none";
    }

    window.onscroll = handleWindowScroll;
    obj.onclick = function() {
        var goTop = setInterval(scrollMove, 10);

        function scrollMove() {
            setScrollTop(getScrollTop() / 1.1);
            if (getScrollTop() < 1) clearInterval(goTop);
        }
    }
}
addLoadEvent(goToTop);
