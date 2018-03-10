import React,{Component} from 'react';
import {connect} from 'react-redux';
import ToolsFlux from './components/workspace/toolsFlux';
import SiteIframe from './components/workspace/siteIframe';
class WorkSpace extends Component{
     render(){
        let media=this.props.ico.ico_event.media;
        let typeName=media.typeName;
        let size={
            width:media.mediaWidth,
            maxWidth:media.mediaMax,
            minWidth:media.mediaMin
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
