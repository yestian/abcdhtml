import React, { Component } from 'react';

class LeftbarPanel extends Component{
    render(){
        let eyeActive=this.props.icoprops.eyeStatus;
        let visible='';
        if(!!eyeActive===false){
            visible='visible';
        }
        return(
            <div className={`bem-LeftSidebarPanels ${visible}`}></div>
        )
    }
}

export default LeftbarPanel;
