import React, { Component } from 'react';
import RightTab1Content from './rightTab1Content';
import RightTab2Content from './rightTab2Content';
import RightTab3Content from './rightTab3Content';
import RightTab4Content from './rightTab4Content';
import RightTab5Content from './rightTab5Content';

class RightInner extends Component{
    render() {
        let right=this.props.data.right;
        if(right.right_tab_index===1){
            return <RightTab1Content/>
        }
        if(right.right_tab_index===2){
            return <RightTab2Content/>
        }
        if(right.right_tab_index===3){
            return <RightTab3Content/>
        }
        if(right.right_tab_index===4){
            return <RightTab4Content/>
        }
        if(right.right_tab_index===5){
            return <RightTab5Content/>
        }

    }
}
export default RightInner;
