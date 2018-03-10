import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionsCreators from '../../../actions/icoAction';

import LeftLogoFlux from './leftlogoflux';
import LeftAdd from './leftadd';
import LeftPages from './leftpages';
import LeftCms from './leftcms';
import LeftPictures from './leftpictures';
import LeftSettings from './leftsettings';
import LeftBotEdges from './leftbottom/leftbotedges';
import LeftBotShowEmpty from './leftbottom/leftbotempty';
import LeftBotShowGrid from './leftbottom/leftbotgrid';
import LeftBotShowXray from './leftbottom/leftbotxray';
import LeftBotTutor from './leftbottom/leftbottutor';
import LeftBotHelp from './leftbottom/leftbothelp';

class Leftbar extends Component{
    render() {
        let {icoMouseEnter,icoClickToggle,icoMouseLeave}=this.props;
        if(!!this.props.icoprops.eyeStatus!==true){
            return (
                <div className="left-sidebar">
                    <div className="left-sidebar-links">
                        <LeftLogoFlux/>
                        <LeftAdd onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave}/>
                        <LeftPages onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave}/>
                        <LeftCms onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave}/>
                        <LeftPictures onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave}/>
                        <LeftSettings onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave}/>
                        <div className="bottom">
                            <LeftBotEdges onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave}/>
                            <LeftBotShowEmpty onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave}/>
                            <LeftBotShowGrid onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave}/>
                            <LeftBotShowXray onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave}/>
                            <LeftBotTutor onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave}/>
                            <LeftBotHelp onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave}/>
                        </div>
                    </div>
                </div>
            )
        }else{
            return '';
        }

    }
}
export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(Leftbar);
