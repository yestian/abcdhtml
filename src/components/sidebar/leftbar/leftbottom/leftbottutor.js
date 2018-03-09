import React, { Component } from 'react';

class LeftTutor extends Component{
    render() {
        return (
            <div className="button tutorials" data-automation-id="left-video"  onClick={(e)=>this.props.onClick(e)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}><i className="icon-main ftu-video-big-blue exclaim"></i><i className="icon-main ftu-video-big"></i></div>
        )
    }
}
export default LeftTutor;
