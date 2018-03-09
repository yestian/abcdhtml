import React, { Component } from 'react';

class LeftBotPages extends Component{
    render() {
        return (
            <div className="button setting sprite-mid edges active" data-automation-id="left-edges"  onClick={(e)=>this.props.onClick(e)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}><i className="icon-main chrome-show-edges"></i></div>
        )
    }
}
export default LeftBotPages;
