import React,{Component} from 'react';
import {connect} from 'react-redux';
import ToolsFlux from './components/workspace/toolsFlux';
import SiteIframe from './components/workspace/siteIframe';
import $ from 'jquery';
class WorkSpace extends Component{
     render(){
        let media=this.props.ico.ico_event.media;
        let typeName=media.typeName;
        let size={};
        if(!!this.props.ico.ico_event.eyeStatus===true && this.props.ico.ico_event.media.mediaType===1){
           size={
               width:$(window).width()-20,
               maxWidth:$(window).width()-20,
               minWidth:0
           }
       }else{
           size={
              width:media.mediaWidth,
              maxWidth:media.mediaMax,
              minWidth:media.mediaMin
          }
       }
         return(
             <div id="workspace" className={`workspace loaded ${typeName}`}>
                 <div className="site-canvas" style={size}>
                     <ToolsFlux/>
                     <SiteIframe/>
                 </div>
            </div>
        )
    }
}
export default connect((state)=>state)(WorkSpace);
