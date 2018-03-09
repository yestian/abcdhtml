import React, { Component } from 'react';
import RightSelector from './rightselector';
import RightSelectorDummy from './rightselectordummy';

class RightInner extends Component{
    render() {
        return (
            <div className="inner">
                <div className="tab-pane">
                    <div className="style-tab kit-sidebar-tab">
                        <RightSelector/>
                        <RightSelectorDummy/>
                    </div>
                    <div className="hud-preload">预加载</div>
                </div>
            </div>
        )
    }
}
export default RightInner;
