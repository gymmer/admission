jQuery.noConflict();
jQuery(function($) {
    /**
     * 头部搜索栏
     */
    function searchKeyWord() {
        var keyWords = $('#primary-seach input').val().trim();
        if (keyWords.length > 0) {
            alert(keyWords);
        }
    }
    $('#primary-seach i').click(function(){
        searchKeyWord();
    });
    $('#primary-seach input').bind('keypress', function(event) {
        //回车执行查询  
        if (event.keyCode == "13") {              
            event.preventDefault();   
            searchKeyWord();
        }
    });

    /**
     * 导航条悬停动画
     */
    var hideMenuLi = function($li) {
        $li.removeClass('open')
            .find('.dropdown>a').attr('aria-expanded', 'false');
    };

    var showMenuLi = function($li) {
        $li.addClass('open')
            .find('.dropdown>a').attr('aria-expanded', 'true');
    }
    $('#primary-nav-list .dropdown>a').hover(function() {
        showMenuLi($(this).parent('li'));
        hideMenuLi($(this).parent('li').siblings());
    },function(event) {
        var fromElement = event.currentTarget;
        var toElement = event.relatedTarget;
        if (toElement.className.indexOf('dropdown')<0) {
            hideMenuLi($(this).parent('li'));
        }
    });

    /*
     * 鼠标悬停在二维码上时显示大图
     */
    $('.qrcode i').hover(function() {
        $(this).siblings('img').show().removeClass('bounceOut').addClass('bounceIn');
    }, function() {
        // 解决IE9 及以下版本，不支持CSS3，导致二维码大图不消失的bug
        if (whichIE()>0 && whichIE()<10){
            $(this).siblings('img').hide().removeClass('bounceIn').addClass('bounceOut');
        }else{
            $(this).siblings('img').removeClass('bounceIn').addClass('bounceOut');
        }
    });

    /*
     * 首页banner的展开与收起
     */
    $('#banner-expand-button').click(function() {
        if($(this).attr('data-expand') === 'false') {
            // 去展开
            $(this).attr('data-expand', 'true')
                .html('<i class="fa fa-chevron-up"></i>收起');
            $('#index-banner-img-container').addClass('expand');
        } else {
            // 去收起
            $(this).attr('data-expand', 'false')
                .html('<i class="fa fa-chevron-down"></i>展开');
            $('#index-banner-img-container').removeClass('expand');
        }
    });

    /**
     * 返回顶部
     */
    // 返回顶部  
    function getScrollTop() {
        return document.documentElement.scrollTop + document.body.scrollTop;
    }
    function setScrollTop(value) 
    { 
        if (document.documentElement.scrollTop) 
        { 
            document.documentElement.scrollTop = value; 
        } 
        else 
        { 
            document.body.scrollTop = value; 
        } 
    }
    // 弹性返回顶部，展现滚动的动画
    var goToTop = $('#go-to-top');
    goToTop.click(function(event) {
        var goTop = setInterval(scrollMove, 12); 
        function scrollMove() 
        { 
            setScrollTop(getScrollTop() / 1.1); 
            if (getScrollTop() < 1) clearInterval(goTop); 
        } 
    });
    // 自动隐藏放回顶部按钮
    $(window).scroll(function(event) {
        getScrollTop()>0 ? goToTop.fadeIn('fast') : goToTop.fadeOut('fast');
    });
})

/**
 * 判断浏览器类型
 * 返回表示浏览器类型的字符串
 */
function whoIsMe(){
    var explorer = navigator.userAgent;
    if(explorer.indexOf("Opera") != -1) { 
        return 'Opera'; 
    } 
    else if(explorer.indexOf("MSIE") != -1) { 
        return 'IE'; 
    } 
    else if(explorer.indexOf("Firefox") != -1) { 
        return 'Firefox'; 
    } 
    else if(explorer.indexOf("Netscape") != -1) { 
        return 'Netscape'; 
    } 
    else if(explorer.indexOf("Chrome") != -1) { 
        return 'Chrome'; 
    } 
    else if(explorer.indexOf("Safari") != -1) { 
        return 'Safari'; 
    } 
    else{ 
        return '无法识别的浏览器。'; 
    } 
}

/*
 * 判断IE的版本。
 * 返回表示IE版本号的int型数字
 * 返回-1表示不是IE浏览器
 */
function whichIE(){
    var appName = navigator.appName;
    var appVersion = navigator.appVersion;

    if(appName != "Microsoft Internet Explorer" ){
        return -1;
    }
    if(appVersion.match(/6./i)=="6."){ 
        return 6; 
    } 
    else if(appVersion.match(/7./i)=="7."){ 
        return 7; 
    } 
    else if(appVersion.match(/8./i)=="8."){ 
        return 8; 
    } 
    else if(appVersion.match(/9./i)=="9."){ 
        return 9; 
    } 
}