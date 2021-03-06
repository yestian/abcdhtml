import React,{Component} from 'react';
import BottomRuler from './bottomRuler';
import BottomDefault from './bottomDefault';

//鼠标mouseenter显示蓝色的线条
//鼠标mousedown显示标尺，当前尺度
//鼠标mouseup，销毁bottombar，恢复默认
//鼠标drag,显示匹配设备
class Bottom extends Component{
     render(){
         let data=this.props.data;
         //drag优先级最高
         if(data.workSpaceDrag){
            return <BottomRuler/>
         }else{
             //节点激活状态
             if(data.noded){
                 return '';
             }else{
                 //default
                return <BottomDefault/>;
             }
         }
    }
}
export default Bottom;


// wf-control wf-resizing wf-canvas-resizing
