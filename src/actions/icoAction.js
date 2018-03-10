import $ from 'jquery';
let ICO_CLICK='ICO_CLICK';
let ICO_MOUSE_ENTER='ICO_MOUSE_ENTER';
let ICO_MOUSE_LEAVE='ICO_MOUSE_LEAVE';
/**
 * 根据点击的节点ID设置对应的文字提示信息
 * @param  {[string]} id [data-automation-id]
 * @return {[string]}    [文字信息]
 */
function icoTipMsg(e){
    //-------------公共设置---------------
    let enter=1,
        width=59;
    //------------顶部图标-----------------------
    let topx=$(e.target).offset().left+e.target.clientWidth/2-width/2,//减去弹窗的一半宽度
        topy=42,
        topPath='M0 2a 2 -2 0 0 1 2 -2l20.0078125 0 6 -6 6 6 20.9921875 0a 2 2 0 0 1 2 2v22a -2 2 0 0 1 -2 2h-53a -2 -2 0 0 1 -2 -2z',
        topClipPath='url(#balloon-clip-31260)';
    //------------左侧图标-----------------
    let leftx=42,
        lefty=$(e.target).offset().top+$(e.target).height()/2,
        leftPath='M0 2a 2 -2 0 0 1 2 -2h60a 2 2 0 0 1 2 2v22a -2 2 0 0 1 -2 2h-60a -2 -2 0 0 1 -2 -2l0 -5 -6 -6 6 -6 z',
        leftClipPath='url(#balloon-clip-78953)';
    //顶部模式
    let topmode={
        clipPath:topClipPath,
        top:topy,
        left:topx,
        enter:enter,
        width:width,
        path:topPath,
    }
    //左侧模式
    let leftmode={
        top:lefty,
        left:leftx,
        enter:enter,
        width:width,
        path:leftPath,
        clipPath:leftClipPath,
    }
    let id=e.currentTarget.getAttribute('data-automation-id');
    if(id==='preview-mode-button'){
        return {tiptext:'切换视图',...topmode}
    }
    if(id==='media-pc'){
        return {tiptext:'台式电脑',...topmode}
    }
    if(id==='media-tablet'){
        return {tiptext:'平板电脑',...topmode}
    }
    if(id==='media-landscape'){
        return {tiptext:'手机宽屏',...topmode}
    }
    if(id==='media-portrait'){
        return {tiptext:'手机竖屏',...topmode}
    }
    if(id==='publish-menu-button'){
        return {tiptext:'发布项目',...topmode}
    }
    if(id==='export-code'){
        return {tiptext:'导出代码',...topmode}
    }
    //---------------左侧图标-----------------------
    if(id==='left-sidebar-add-button'){
        return {tiptext:'添加元素',...leftmode}
    }
    if(id==='show-pages'){
        return {tiptext:'所有页面',...leftmode}
    }
    if(id==='left-sidebar-cms-button'){
        return {tiptext:'模板选择',...leftmode}
    }
    if(id==='left-pictures'){
        return {tiptext:'图片素材',...leftmode}
    }
    if(id==='left-settings'){
        return {tiptext:'搜索设置',...leftmode}
    }
    if(id==='left-edges'){
        return {tiptext:'元素边缘',...leftmode}
    }
    if(id==='left-show-empty'){
        return {tiptext:'非空元素',...leftmode}
    }
    if(id==='left-show-grid'){
        return {tiptext:'网格覆盖',...leftmode}
    }
    if(id==='left-xray'){
        return {tiptext:'射线模式',...leftmode}
    }
    if(id==='left-video'){
        return {tiptext:'视频教程',...leftmode}
    }
    if(id==='right-sidebar-style'){
        return {tiptext:'当前样式',...topmode}
    }
    if(id==='right-sidebar-settings-tab-link'){
        return {tiptext:'元素设置',...topmode}
    }
    if(id==='right-sidebar-navigator-tab-link'){
        return {tiptext:'元素导航',...topmode}
    }
    if(id==='right-sidebar-allstyles'){
        return {tiptext:'样式管理',...topmode}
    }
    if(id==='right-sidebar-interactions-tab-link'){
        return {
                tiptext:'交互效果管理',
                clipPath:'url(#balloon-clip-63391)',
                top:topy,
                left:$(e.target).offset().left+e.target.clientWidth-93,
                enter:enter,
                width:93,
                path:'M0 2a 2 -2 0 0 1 2 -2l68.03125 0 6 -6 6 6 8.96875 0a 2 2 0 0 1 2 2v22a -2 2 0 0 1 -2 2h-89a -2 -2 0 0 1 -2 -2z'
            }
    }
    if(id==='topbar-undo'){
        return {
                tiptext:'没有可撤消事件',
                clipPath:'url(#balloon-clip-10822)',
                top:topy,
                left:$(e.target).offset().left+e.target.clientWidth/2-107/2,
                enter:enter,
                width:107,
                path:'M0 2a 2 -2 0 0 1 2 -2l45.3671875 0 6 -6 6 6 45.6328125 0a 2 2 0 0 1 2 2v22a -2 2 0 0 1 -2 2h-103a -2 -2 0 0 1 -2 -2z'
            }
    }
    if(id==='topbar-redo'){
        return {
                tiptext:'没有可重做事件',
                clipPath:'url(#balloon-clip-10822)',
                top:topy,
                left:$(e.target).offset().left+e.target.clientWidth/2-107/2,
                enter:enter,
                width:107,
                path:'M0 2a 2 -2 0 0 1 2 -2l45.3671875 0 6 -6 6 6 45.6328125 0a 2 2 0 0 1 2 2v22a -2 2 0 0 1 -2 2h-103a -2 -2 0 0 1 -2 -2z'
            }
    }
    if(id==='change-saved'){
        return {
                tiptext:'变动已经保存',
                clipPath:'url(#balloon-clip-87790)',
                top:topy,
                left:$(e.target).offset().left+e.target.clientWidth/2-96/2,
                enter:enter,
                width:96,
                path:'M0 2a 2 -2 0 0 1 2 -2l39.703125 0 6 -6 6 6 40.296875 0a 2 2 0 0 1 2 2v22a -2 2 0 0 1 -2 2h-92a -2 -2 0 0 1 -2 -2z'
            }
    }
}
/**
 * 点击工具栏图标，切换响应的功能
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
export function icoClickToggle(e){
    let id=e.currentTarget.getAttribute('data-automation-id');

    return { type: ICO_CLICK, id}
}

var timer=null;
/**
 * 鼠标悬停在图标上，显示文字解释框
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
export function icoMouseEnter(e){
    e.preventDefault();
    e.stopPropagation();
    let id=e.currentTarget.getAttribute('data-automation-id');
    return function(dispatch){
        let tipmsg=icoTipMsg(e);
        timer=setTimeout(()=>{
            dispatch({type: ICO_MOUSE_ENTER,dataId:id, ...tipmsg});
        },500);
    }
}

/**
 * 鼠标离开图标，销毁提示框
 * @param  {[type]} e [description]
 * @return {[type]}   [description]
 */
export function icoMouseLeave(e) {
    clearTimeout(timer);
    return {type:ICO_MOUSE_LEAVE}
}
