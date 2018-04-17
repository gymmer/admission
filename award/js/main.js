'use strict';

jQuery.noConflict();
jQuery(function ($) {

    /**
     * 首页表格点击跳转
     */
    $('#index-table tbody tr').click(function(event) {
        var href = $(this).attr('data-href');
        window.open(href);
    });

    /**
     * 返回顶部
     */
    // 返回顶部  
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
    // 弹性返回顶部，展现滚动的动画
    var goToTop = $('#go-to-top');
    goToTop.click(function (event) {
        var goTop = setInterval(scrollMove, 12);
        function scrollMove() {
            setScrollTop(getScrollTop() / 1.1);
            if (getScrollTop() < 1) clearInterval(goTop);
        }
    });
    // 自动隐藏放回顶部按钮
    $(window).scroll(function (event) {
        getScrollTop() > 0 ? goToTop.fadeIn('fast') : goToTop.fadeOut('fast');
    });

    /**
     * 项目名称
     */
    var projects = {
        "00000": "教学成果奖测试行",
        "11005": "国家试点学院APLIC教育学科创新人才培养模式探索",
        "11012": "基于全人发展理念的发展与教育心理学专业平台课程体系改革与教学实践创新",
        "11023": "跨校联合、校企协同，动漫高端人才培养模式的创新与实践",
        "11035": "构建多层面、多维度、多媒介的高校中国古代文学开放式教育教学体系",
        "11049": "中国电影史论课程体系的教学改革与创新拓展",
        "11051": "面向国家发展战略需求的实践育人体系研究与实践",
        "11059": "面向未来的“三维度•一体化”卓越教师培养实践研究",
        "11062": "概率论研究群体在随机数学教学中的实践与探索",
        "11063": "深化化学专业博士学位课程改革，提升博士生的综合素质和创新能力",
        "11084": "大学生体质健康与体育素养并重提升新体系的创建与实践",
        "11089": "实践本科科研国际化模式促进创新型化学人才培养",
        "11102": "思想政治理论课“立德树人”教育教学模式的探索与实践",
        "11105": "基于全国教师网联公共服务平台的教师教育课程共享创新与实践",
        "11113": "中文人才国际化培养机制的探索与实践"
    }
    var projectNameElem = $('#project-name');
    var projectId       = projectNameElem.attr('data-projectId');
    var projectString   = '【' + projectId + '】' + projects[projectId];
    projectNameElem.html(projectString);

    /**
     * 视频播放
     */
    $('.video-wrapper').click(function(event) {
        var video = $(this).find('video');
        var playButton = $(this).find('.play-video');
        if (video[0].paused) {
            video[0].play();
            playButton.hide();
        }else{
            video[0].pause();
            playButton.show();
        }
    });
    $('.video-wrapper').mouseover(function(event) {
        $(this).find('.play-video').show();
    });
    $('.video-wrapper').mouseout(function(event) {
        var video = $(this).find('video');
        var playButton = $(this).find('.play-video');
        if (video[0].paused) {
            playButton.show();
        }else{
            playButton.hide();
        }
    });
})