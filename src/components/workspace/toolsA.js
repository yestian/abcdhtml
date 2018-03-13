import React,{Component} from 'react';
import {connect} from 'react-redux';
import Grid from './grid';

class ToolsA extends Component{
     render(){
         let ico=this.props.ico.ico_event;
         return(
             <div style={{height: '100%',width: '100%',position: 'absolute'}}>
                 <div style={{height: '100%',width: '100%',position: 'absolute',top: 0,left: 0}}>
                     <div><div></div></div>
                     <div id="w-rich-text-node-canvas"></div>
                     <div className="resize-hint" style={{transform: 'translate(10px, 10px)'}}><div className="main"><div className="value text">0</div><div className="x text">x</div><div className="value text">0</div></div><div className="note text"></div></div>
                 </div>
                 {/* 左侧设置的背景网格,网格有2种模式 */}
                 <Grid ico={ico}/>
            </div>

        )
    }
}

export default connect((state)=>state)(ToolsA);
