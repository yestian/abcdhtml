import React, { Component } from 'react';
import RightSelector from './rightSelector';
import RightSelectorDummy from './rightSelectorDummy';

class RightTab1Content extends Component{
     render(){
         return (
             <div className="tab-pane">
                 <div className="style-tab kit-sidebar-tab">
                     <RightSelector/>
                     <RightSelectorDummy/>
                 </div>
                 <div className="hud-preload">预加载</div>
             </div>
         )
    }
}
export default RightTab1Content;
