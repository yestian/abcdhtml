import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionsCreators from '../../../actions/icoAction';

import RightTabs from './rightTabs';
import RightInner from './rightInner';

class RightBar extends Component{
    render() {
        let {icoMouseEnter,icoClickToggle,icoMouseLeave}=this.props;
        if(!!this.props.icoprops.eyeStatus!==true){
            return (
                <div id="right-sidebar" className="right-sidebar">
                    <RightTabs  onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave}/>
                    <RightInner/>
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
)(RightBar);
