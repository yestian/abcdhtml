import React, { Component } from 'react';

class HelperB extends Component{
    render(){
        let ico=this.props.icoprops;
        if(!!ico.eyeStatus===true || !!ico.showAdds===true || !!ico.showPages===true || !!ico.showPictures===true || !!ico.showSettings===true){
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

export default HelperB;
