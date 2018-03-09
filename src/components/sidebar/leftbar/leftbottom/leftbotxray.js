import React, { Component } from 'react';

class LeftXray extends Component{
    render() {
        return (
            <div className="button setting sprite-mid xray with-divider" data-automation-id="left-xray"  onClick={(e)=>this.props.onClick(e)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}><i className="icon-main chrome-show-xray"></i></div>
        )
    }
}
export default LeftXray;
