import React, { Component } from 'react';

class LeftTutor extends Component{
    render() {
        let active='';
        if(!!this.props.ico.showTutor===true){
            active='active';
        }
        return (
            <div className={`button tutorials ${active}`} data-automation-id="left-video"  onClick={()=>this.props.onClick(!this.props.ico.showTutor)}
            onMouseEnter={(e)=>this.props.onMouseEnter(e)}
            onMouseLeave={(e)=>this.props.onMouseLeave(e)}><i className="icon-main ftu-video-big-blue exclaim"></i><i className="icon-main ftu-video-big"></i></div>
        )
    }
}
export default LeftTutor;
