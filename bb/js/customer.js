jQuery.noConflict();
jQuery(function($) {
    var buttons = $('#choose-button .button');
    var tabs = $('.tab');
    buttons.mouseenter(function() {
        $(this).addClass('hover').siblings().removeClass('hover');
        // 切换显示的tab
        var currenTabIndex = tabs.index(tabs.filter(':not(:hidden)'));
        var targetTabIndex = buttons.index($(this));
        if (currenTabIndex != targetTabIndex) {
            tabs.hide().eq(targetTabIndex).fadeIn('fast');
        }
    }).click(function(event) {
        var user = $(this).attr('id').split('-')[0];
        var link = $('#'+user+'-link').attr('href');
        window.open(link);
    }).eq(0).mouseenter();
})
