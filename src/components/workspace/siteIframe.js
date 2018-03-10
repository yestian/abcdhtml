import React,{Component} from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';

class SiteIframe extends Component{
     render(){
         let evt=this.props.ico.ico_event;
         let media=evt.media,topH=0,botH=0;
         if(!!evt.topBarStatus===true){
             topH=35;
         }
         if(!!evt.botBarStatus===true){
             botH=29;
         }
         let H=$(window).height()-topH-botH;
         let size={};
         if(!!this.props.ico.ico_event.eyeStatus===true && this.props.ico.ico_event.media.mediaType===1){
             //还要判断媒体按钮状态
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

        return (
            <div id="site-iframe-next-container">
                <iframe id="site-iframe-next" title="workspaceIframe" style={{display: 'inline',minHeight: '100%',maxHeight: '100%',border:0,position: 'relative',overflow: 'hidden',transformStyle: 'preserve-3d',pointerEvents: 'auto',...size,height:H}}></iframe>
            </div>
        )
    }
}

export default connect((state)=>state)(SiteIframe);
