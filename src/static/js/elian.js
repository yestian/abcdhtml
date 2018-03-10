import $ from 'jquery';

/**
 * 设置网页展区区域的高度
 * @type {[type]}
 */
function setIframe(){
    let operHeight=$(window).height();
    let topbarH=0,botBarH=0;
    if($('html').is('.avoid-top-bar')){
        topbarH=35;
    }
    if($('html').is('.avoid-bottom-bar')){
        botBarH=29;
    }
    $('#site-iframe-next').height(operHeight-topbarH-botBarH);
}
$(function(){
     setIframe();
     $(window).resize(function(){
        setIframe();
     });
});
