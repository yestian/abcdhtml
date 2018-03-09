import React, { Component } from 'react';

class RightSelector extends Component{
    render() {
        return (
            <div className="kit-sidebar-top-section">
                <div className="selected-node-title">
                    <div className="type-icon-inset">
                        <div className="el-icon n-div"></div>
                    </div>
                    <div className="label">没有选择</div>
                </div>
                <div className="kit-divider top"></div>
                <div className="selector-widget clearfix disabled">
                    <div className="css-selector">
                        <div className="chunk main">
                            <div className="nest-label">
                                <div className="label">选择:</div>
                            </div>
                            <div className="inset clearfix editable no-element">
                                <div className="kit-button linked" style={{width: '26px',boxSizing: 'border-box'}}><i className="sprite-main"></i></div>
                                <div className="dummy-state" data-automation-id="selector-widget-dummy-state">
                                    <span className="no-element">无</span><span className="need-class">选择一个类</span><span className="is-instance"><i className="sprite-main"></i>双击符号开始编辑</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="target-toggle affecting"><i className="icon-main common-target"></i><span>无</span></a>
            </div>
        )
    }
}
export default RightSelector;
