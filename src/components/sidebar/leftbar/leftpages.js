import React, { Component } from 'react';

class LeftPages extends Component{
    render() {
        return (
            <div className="button top" data-automation-id="show-pages" onClick={(e)=>this.props.onClick(e)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}><i className="icon-main chrome-pages"></i></div>
        )
    }
}
export default LeftPages;
