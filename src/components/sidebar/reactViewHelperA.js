import React, { Component } from 'react';

class HelperA extends Component{
    render(){
        let ico=this.props.icoprops.leftBtns;
        if(ico.eyeStatus || ico.showAdds || ico.showPages || ico.showPictures || ico.showSettings || ico.showTutor || ico.showCMS){
            return '';
        }else{
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
        }
    }
}

export default HelperA;
