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
        let b={
            position: 'absolute',
            pointerEvents: 'none',
            overflow: 'hidden',
            left: '35px',
            top: '35px',
            width: '1645px',
            height: '490px'
        }
        let icoprops=this.props.ico.ico_event;
        return (
            <div>
                <div>
                    {/* svg图标集合 */}
                  <TopBar/>
                  <DesignerLogo/>
                  <LeftBar/>
                  <RightBar/>
                  <LeftBarPanel/>
                  <BottomBar/>
                  {/* <No used/> */}
                  <ComfirmWrapper/>
                  <Fade/>
                  <NotificationList/>
                </div>
                <div style={a}>
                    <div><div style={b}></div></div>
                    <div><div style={b}></div></div>
                    <SidebarIcoEnter icoprops={icoprops}/>
                </div>
            </div>
        );
    }
}

export default connect(state=>state)(DesignerReact);
