import { combineReducers } from 'redux';
import ico from './ico';

const indexInit={
    noded:0,//是否已经选择了节点判断，加载完页面，默认不选中任何节点
}
//和框架内的页面相关的内容在此处设置
const index=(state=indexInit,action)=>{
    switch(action.type){
        case 1:
        return '';
        default:
        return state;
    }
}

const todoApp = combineReducers({
  ico,index
})

export default todoApp;
