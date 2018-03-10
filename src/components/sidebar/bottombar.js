import React, { Component } from 'react';

class BottomBar extends Component{
    render(){
        if(!!this.props.icoprops.eyeStatus!==true){
            return(
                <div className="bem-BottomBar">
                    <div className="bem-BottomBar_Main">
                        <div className="bem-BottomBar_Placeholder">没有元素被选择</div>
                        <div className="bem-Breadcrumbs">
                            <div className="bem-Breadcrumbs_Container"></div>
                        </div>
                        <div className="bem-BottomBar_RealtimeSiteViewers">
                            <div className="bem-ProfilePictures" style={{display: 'flex',paddingLeft: '6.6px'}}></div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return '';
        }

    }
}

export default BottomBar;
