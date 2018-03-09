import React, { Component } from 'react';

class LeftEmpty extends Component{
    render() {
        return (
            <div className="button setting sprite-mid empty active" data-automation-id="left-show-empty"  onClick={(e)=>this.props.onClick(e)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}><i className="icon-main chrome-show-empty"></i></div>
        )
    }
}
export default LeftEmpty;
