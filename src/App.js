import React,{Component} from 'react';
import $ from 'jquery';
import {connect} from 'react-redux';
import DesignerReact from './DesignerReact';

class App extends Component{
    render(){
        return (
            <div>
                <div id="workspace" className="workspace">
                    <div className="site-canvas">
                        <div id="tools-flux"></div>
                        <div id="site-iframe-next-container"></div>
                    </div>
                </div>
                <div id="debug-overlay"></div>
                <iframe id="responsive-images-iframe" src="/site/empty.html" title="imgFrame"></iframe>
                <div id="designer-app-react-mount">
                  <DesignerReact/>
                </div>
                <div id="preload-assets"></div>
                <div id="drag-ghost"></div>
                <div id="debug-undo-stack" className="debug-panel">
                    <div className="column undo">
                        <div className="title">撤销
                            <div className="count">0</div>
                        </div>
                        <div className="stack"></div>
                    </div>
                    <div className="column redo">
                        <div className="title">重做
                            <div className="count">0</div>
                        </div>
                      <div className="stack"></div>
                    </div>
                </div>
                <div id="wf-eyedropper-button"></div>
            </div>
        )
    }
}


$(document).ready(function(){
    var html=$('html');
    html.addClass('wf-doc');
    html.addClass('avoid-right-sidebar avoid-left-sidebar wf-proximanova-n6-active wf-proximanova-n4-active wf-proximanova-n3-active wf-active avoid-top-bar avoid-bottom-bar');
    $('#preload-assets').append('<img src="./static/img/example-bg.png"/><img src="./static/img/image-placeholder.png"/><img src="./static/img/placeholder-thumb.png"/>');//预加载图片
});
//connect链接



export default connect((state)=>state)(App);
