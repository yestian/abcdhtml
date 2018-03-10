import { combineReducers } from 'redux';
import $ from 'jquery';
const stateInit={
    enter:0,//图标的mousenter
    eyeStatus:0,//眼睛状态
    topBarStatus:1,//顶部菜单默认显示
    leftClick:{//点击的时候，只返回当前点击的按钮值，值从点击参数中取反
        addClick:0,//添加元素
        pagesClick:0,//页面列表
        cmsClick:0,//模板列表
        picturesClick:0,//图标列表
        settingsClick:0,//系统设置
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
