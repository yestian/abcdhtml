import React,{Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actionsCreators from './actions/icoAction';

import TopBar from './components/sidebar/topbar/top';
import DesignerLogo from './components/sidebar/designerlogo';
import LeftBar from './components/sidebar/leftbar/left';
import RightBar from './components/sidebar/rightbar/right';
import LeftBarPanel from './components/sidebar/leftbarpanel';
import BottomBar from './components/sidebar/bottombar/bottom';
import ComfirmWrapper from './components/sidebar/comfirmwrapper';
import Fade from './components/sidebar/fade';
import NotificationList from './components/sidebar/notificationlist';
import ReactViewHelperA from './components/sidebar/reactViewHelperA';
import ReactViewHelperB from './components/sidebar/reactViewHelperB';
import SidebarIcoEnter from './components/sidebar/SidebarIcoEnter';
import LogoOpenMenu from './components/sidebar/logoOpenMenu';
import TutorVideo from './components/sidebar/leftbar/leftsub/tutorVideo';
import LeftCMSSub from './components/sidebar/leftbar/leftsub/addEleCMS';

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
        let {toggleLogo}=this.props;
        return (
            <div>
                <div>
                    {/* svg图标集合 */}
                  <TopBar/>
                  <DesignerLogo icoprops={icoprops} onClick={toggleLogo}/>
                  <LeftBar/>
                  <RightBar/>
                  {/* 左侧点击按钮，产生的二级页面，放在这个里面，根据不同的按钮，通过中间判断页面，显示不同的内容 */}
                  <div className={`bem-LeftSidebarPanels ${!icoprops.eyeStatus?'visible':''}`}>
                        <LeftBarPanel icoprops={icoprops}/>
                        {/* 具体每个元素的解释
                        <AddElementHelper/> */}
                  </div>
                  <BottomBar data={this.props.index}/>
                  {/* <No used/> */}
                  <ComfirmWrapper/>
                  <Fade/>
                  <NotificationList icoprops={icoprops}/>
                </div>
                <div style={a} className="react-view-helper">
                    <ReactViewHelperA icoprops={icoprops}/>
                    <ReactViewHelperB icoprops={icoprops}/>
                    <TutorVideo data={icoprops}/>
                    {/* CMS按钮的二级页面 */}
                    <LeftCMSSub/>
                    <SidebarIcoEnter icoprops={icoprops}/>
                    <LogoOpenMenu icoprops={icoprops} onMouseLeave={toggleLogo}/>
                </div>
            </div>
        );
    }
}


export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(DesignerReact);
