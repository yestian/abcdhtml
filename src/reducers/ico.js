import { combineReducers } from 'redux';
import $ from 'jquery';
const stateInit={
    enter:0,//图标的mousenter
    eyeStatus:0,//眼睛状态
    topBarStatus:1,//顶部菜单默认显示
    botBarStatus:1,//底部菜单默认显示
    showEdges:1,//是否显示元素边缘，默认显示
    showEmpty:1,//默认显示空元素
    showGrid:0,//默认不显示网格，0，1,2切换
    showXray:0,//默认不显示
    showTutor:0,//默认不打开视频知道
    showLogoMenu:0,//默认不显示logomenu
    addType:0,//添加按钮里面的类型切换
    leftBtns:{
        showAdds:0,//添加元素
        showPages:0,//页面列表
        showCMS:0,//模板列表
        showPictures:0,//图标列表
        showSettings:0,//系统设置
    },
    media:{
        mediaType:1,
        mediaWidth:$(window).width()-296,//默认屏幕尺寸
        mediaMax:$(window).width()-296,//最大尺寸
        mediaMin:992,//最小尺寸
        typeName:'media-main',//显示在workspce类上
    }
}
const ico_event=(state=stateInit,action)=>{
    switch(action.type){
        //点击眼睛图标
        case 'EYE_TOGGLE' :
        return Object.assign({},state,{
            ...action,
            enter:0,//隐藏提示弹窗
        });
        //是否显示顶部菜单
        case 'TOPBAR_TOGGLE' :
        return Object.assign({},state,{
            ...action,
        });
        //是否显示顶部菜单
        case 'SELECT_MEDIA' :
        return Object.assign({},state,{
            ...action,
        });
        //是否显示添加页面
        case 'TOGGLE_ADD' :
        return Object.assign({},state,{
            leftBtns:{
                showAdds:action.showAdds,
                showPages:0,
                showCMS:0,
                showPictures:0,
                showSettings:0,
            }
        });
        case 'TOGGLE_ADDTYPE':
        return Object.assign({},state,{
            ...action,
        });
        //是否显示模板页面
        case 'TOGGLE_PAGES' :
        return Object.assign({},state,{
            leftBtns:{
                showAdds:0,
                showPages:action.showPages,
                showCMS:0,
                showPictures:0,
                showSettings:0,
            }
        });
        //是否显示模板
        case 'TOGGLE_CMS' :
        return Object.assign({},state,{
            leftBtns:{
                showAdds:0,
                showPages:0,
                showCMS:action.showCMS,
                showPictures:0,
                showSettings:0,
            }
        });
        //是否显示图片列表
        case 'TOGGLE_PICTURES' :
        return Object.assign({},state,{
            leftBtns:{
                showAdds:0,
                showPages:0,
                showCMS:0,
                showPictures:action.showPictures,
                showSettings:0,
            }
        });
        //是否设置的页面
        case 'TOGGLE_SETTINGS' :
        return Object.assign({},state,{
            leftBtns:{
                showAdds:0,
                showPages:0,
                showCMS:0,
                showPictures:0,
                showSettings:action.showSettings,
            }
        });
        //是否显示元素边缘
        case 'TOGGLE_EDGES' :
        return Object.assign({},state,{
            ...action,
        });
        //是否显示空元素
        case 'TOGGLE_EMPTY' :
        return Object.assign({},state,{
            ...action,
        });
        //是否显示网格
        case 'TOGGLE_GRID' :
        return Object.assign({},state,{
            ...action,
        });
        //是否显示X射线
        case 'TOGGLE_XRAY' :
        return Object.assign({},state,{
            ...action,
        });
        //是否显示视频指导
        case 'TOGGLE_TOTUR' :
        return Object.assign({},state,{
            ...action,
        });
        //是否显示logo下的菜单
        case 'TOGGLE_LOGO' :
        return Object.assign({},state,{
            ...action,
        });
        case 'ICO_MOUSE_ENTER' :
        return Object.assign({},state,{
                ...action
        });
        //鼠标离开图标
        case 'ICO_MOUSE_LEAVE' :
        return Object.assign({},state,{
            enter:0
        });
        default:
        return state;
    }
}


//////////--------------------合并---------------------////////////////////////
const reducer=combineReducers({
    ico_event
});
export default reducer;
