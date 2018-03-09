import React, { Component } from 'react';

class LeftCms extends Component{
    render() {
        return (
            <div className="button top dynamo" data-automation-id="left-sidebar-cms-button" onClick={(e)=>this.props.onClick(e)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}><i className="icon-main chrome-collections"></i></div>
        )
    }
}
export default LeftCms;
