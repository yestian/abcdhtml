import React, { Component } from 'react';
import RightTabs from './righttabs';
import RightInner from './rightinner';

class RightBar extends Component{
    render() {
        return (
            <div id="right-sidebar" className="right-sidebar">
                <RightTabs/>
                <RightInner/>
            </div>
        )
    }
}
export default RightBar;
