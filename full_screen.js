var element = document.documentElement;		// 返回 html dom 中的root 节点 <html>
if(!$('body').hasClass('full-screen')) {
    $(this).removeClass('icon_fullscreen').addClass('icon_narrowscreen');
    $('body').addClass('full-screen');
    // 判断浏览器设备类型
    if(element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.mozRequestFullScreen){	// 兼容火狐
        element.mozRequestFullScreen();
    } else if(element.webkitRequestFullscreen) {	// 兼容谷歌
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {	// 兼容IE
        element.msRequestFullscreen();
    }
} else {			// 退出全屏
    $(this).removeClass('icon_narrowscreen').addClass('icon_fullscreen');
    $('body').removeClass('full-screen');
    //	退出全屏
    if(document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}
