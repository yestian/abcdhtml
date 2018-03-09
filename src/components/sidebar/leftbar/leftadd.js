import React, { Component } from 'react';

class LeftAdd extends Component{
    render() {
        return (
            <div className="button top add" data-automation-id="left-sidebar-add-button" onClick={(e)=>this.props.onClick(e)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}>
                <i className="icon-main chrome-add"></i>
            </div>
        )
    }
}
export default LeftAdd;
