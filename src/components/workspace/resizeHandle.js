import React,{Component} from 'react';
import $ from 'jquery';
require('jquery-ui');
class ResizeHandle extends Component{
    constructor(props){
        super(props);
        this.draggable=this.draggable.bind(this);
    }

    draggable({
            start:function(event,ui){

            },
            drag:function(event,ui){

            },
            stop:function(event,ui){
                $('body').removeClass('wf-resizing wf-canvas-resizing');
            }
    })
     render(){
         let data=this.props.data;
         // console.log(data);
         return(
            <div className="canvas-resize-handle">
                <div className="handle right-handle" style={{right: '-24px'}}
                    onMouseDown={()=>data.workSpaceDrag(1)}
                    onMouseUp={()=>data.workSpaceDrag(0)}>
                    <div className="gutter-handle"></div>
                    <div className="tab-handle"></div>
                </div>
                <div className="handle left-handle"
                    onMouseDown={()=>data.workSpaceDrag(1)}
                    onMouseUp={()=>data.workSpaceDrag(0)}
                    onDrag={()=>this.draggable()}
                    ></div>
            </div>
        )
    }
}
export default ResizeHandle;
