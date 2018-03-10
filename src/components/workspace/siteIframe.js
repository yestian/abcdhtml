import React,{Component} from 'react';
import {connect} from 'react-redux';

class SiteIframe extends Component{
     render(){
         let media=this.props.ico.ico_event.media;
         let size={
            width:media.mediaWidth,
            maxWidth:media.mediaMax,
            minWidth:media.mediaMin
         }
        return (
            <div id="site-iframe-next-container">
                <iframe id="site-iframe-next" title="workspaceIframe" style={{height: '100%',display: 'inline',minHeight: '100%',maxHeight: '100%',border:0,position: 'relative',overflow: 'hidden',transformStyle: 'preserve-3d',pointerEvents: 'auto',...size}}></iframe>
            </div>
        )
    }
}

export default connect((state)=>state)(SiteIframe);
