import React, { Component } from 'react';
import RightTabStyle from './righttabstyle';
import RightTabSettings from './righttabsettings';
import RightTabNavigator from './righttabnavigator';
import RightTabAllStyles from './righttaballstyles';
import RightTabInteractions from './righttabinteractions';

class RightTabs extends Component{
    render() {
        return (
            <div className="tabs">
                <RightTabStyle/>
                <RightTabSettings/>
                <RightTabNavigator/>
                <RightTabAllStyles/>
                <RightTabInteractions/>
            </div>
        )
    }
}
export default RightTabs;
