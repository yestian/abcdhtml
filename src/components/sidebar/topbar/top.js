import React, { Component } from 'react';
import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionsCreators from '../../../actions/icoAction';

import TopbarToggleBtn from './topbarToggleBtn';
import TopbarEye from './topbarEye';
import TopbarShowPagesBtn from './topbarShowPagesBtn';
import TopbarCenter from './topbarCenter';
import TopbarPublish from './topbarrightpublish';
import TopbarUndoRedo from './topbarundoredo.js';
import TopbarRightStatus from './topbarrightstatus.js';
import TopbarExport from './topbarexport.js';

class Topbar extends Component{
  render() {
      let {icoMouseEnter,icoClickToggle,icoMouseLeave}=this.props;
    return (
      <div className="bem-TopBar">
          <div className="bem-TopBar_Body" style={{top:0}}>
                <div className="bem-TopBar_Body_Group bem-TopBar_Body_Group-left">
                  <TopbarShowPagesBtn/>
                  <TopbarEye onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave}/>
                </div>
               <TopbarCenter onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave}/>
               <div className="bem-TopBar_Body_Group bem-TopBar_Body_Group-right">
                   <TopbarUndoRedo/>
                   <TopbarRightStatus/>
                   <TopbarExport onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave}/>
                   <TopbarPublish onClick={icoClickToggle} onMouseEnter={icoMouseEnter} onMouseLeave={icoMouseLeave}/>
               </div>
          </div>
          <TopbarToggleBtn/>
      </div>

    );
  }
}
export default connect(
    state=>state,
    dispatch=>bindActionCreators(actionsCreators,dispatch)
)(Topbar);
