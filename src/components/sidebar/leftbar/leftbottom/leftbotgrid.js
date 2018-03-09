import React, { Component } from 'react';

class LeftGrid extends Component{
    render() {
        return (
            <div className="button setting sprite-mid grid none" data-automation-id="left-show-grid"  onClick={(e)=>this.props.onClick(e)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}><i className="icon-main chrome-show-grid"></i></div>
        )
    }
}
export default LeftGrid;
