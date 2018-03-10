import React, { Component } from 'react';

class HelperB extends Component{
    render(){
        if(!!this.props.icoprops.eyeStatus!==true){
            let b={
                position: 'absolute',
                pointerEvents: 'none',
                overflow: 'hidden',
                left: '35px',
                top: '35px',
                width: '1645px',
                height: '490px'
            }
            return(
                <div><div style={b}></div></div>
            )
        }else{
            return '';
        }

    }
}

export default HelperB;
