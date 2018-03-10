import React, { Component } from 'react';
import {connect} from 'react-redux';

import TopBar from './components/sidebar/topbar/top';
import DesignerLogo from './components/sidebar/designerlogo';
import LeftBar from './components/sidebar/leftbar/left';
import RightBar from './components/sidebar/rightbar/right';
import LeftBarPanel from './components/sidebar/leftbarpanel';
import BottomBar from './components/sidebar/bottombar';
import ComfirmWrapper from './components/sidebar/comfirmwrapper';
import Fade from './components/sidebar/fade';
import NotificationList from './components/sidebar/notificationlist';
import ReactViewHelperA from './components/sidebar/reactViewHelperA';
import ReactViewHelperB from './components/sidebar/reactViewHelperB';
import SidebarIcoEnter from './components/sidebar/SidebarIcoEnter';

class DesignerReact extends Component {
    render() {
        let a={
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            zIndex: 9999,
            color: 'rgb(217, 217, 217)',
            fontFamily: 'Arial, sans-serif',
            fontSize: '11px',
            lineHeight: '16px',
            WebkitFontSmoothing:'antialiased'
        }
        let icoprops=this.props.ico.ico_event;
        return (
            <div>
                <div>
                    {/* svg图标集合 */}
                  <TopBar/>
                  <DesignerLogo icoprops={icoprops}/>
                  <LeftBar icoprops={icoprops}/>
                  <RightBar icoprops={icoprops}/>
                  <LeftBarPanel icoprops={icoprops}/>
                  <BottomBar icoprops={icoprops}/>
                  {/* <No used/> */}
                  <ComfirmWrapper/>
                  <Fade/>
                  <NotificationList icoprops={icoprops}/>
                </div>
                <div style={a} className="react-view-helper">
                    <ReactViewHelperA icoprops={icoprops}/>
                    <ReactViewHelperB icoprops={icoprops}/>
                    <SidebarIcoEnter icoprops={icoprops}/>
                </div>
            </div>
        );
    }
}

export default connect(state=>state)(DesignerReact);
