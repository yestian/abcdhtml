import React, { Component } from 'react';

class RightTabs extends Component{
    render() {
        return (
            <div className="tabs">
                <div className="tab style-tab active" data-automation-id="right-sidebar-style" onClick={(e)=>this.props.onClick(e)}
                onMouseEnter={(e)=>this.props.onMouseEnter(e)}
                onMouseLeave={(e)=>this.props.onMouseLeave(e)}>
                    <span className="sprite-mid"><i></i></span>
                </div>
                <div className="tab settings-tab" data-automation-id="right-sidebar-settings-tab-link" onClick={(e)=>this.props.onClick(e)}
                onMouseEnter={(e)=>this.props.onMouseEnter(e)}
                onMouseLeave={(e)=>this.props.onMouseLeave(e)}>
                    <span className="sprite-mid"><i></i></span>
                </div>
                <div className="tab navigator-tab" data-automation-id="right-sidebar-navigator-tab-link" onClick={(e)=>this.props.onClick(e)}
                onMouseEnter={(e)=>this.props.onMouseEnter(e)}
                onMouseLeave={(e)=>this.props.onMouseLeave(e)}>
                    <span className="sprite-mid"><i></i></span>
                </div>
                <div className="tab all-styles-tab" data-automation-id="right-sidebar-allstyles" onClick={(e)=>this.props.onClick(e)}
                onMouseEnter={(e)=>this.props.onMouseEnter(e)}
                onMouseLeave={(e)=>this.props.onMouseLeave(e)}>
                    <span className="sprite-mid"><i></i></span>
                </div>
                <div className="tab interactions-tab" data-automation-id="right-sidebar-interactions-tab-link" onClick={(e)=>this.props.onClick(e)}
                onMouseEnter={(e)=>this.props.onMouseEnter(e)}
                onMouseLeave={(e)=>this.props.onMouseLeave(e)}>
                    <span className="sprite-mid"><i></i></span>
                </div>
            </div>
        )
    }
}
export default RightTabs;
