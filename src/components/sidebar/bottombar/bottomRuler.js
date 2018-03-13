import React,{Component} from 'react';
import $ from 'jquery';

class BottomRuler extends Component{
    constructor(props){
        super(props);
        this.ruler=$(`<div class="bem-View Ruler_Container_Offset_Markers"></div>`);
        let b=1920;
        for (let a=0;a<Math.ceil(b/50);a++){
            let value=a*50;
            let sm=$(`<div class="bem-Ruler_Container_Offset_MarkerGroup_Marker small"></div>`);
            let lg=$(`<div class="bem-Ruler_Container_Offset_MarkerGroup_Marker large"></div>`);
            let group=$(`<div class="bem-Ruler_Container_Offset_MarkerGroup" style="left: ${value}px"><div class="bem-Ruler_Container_Offset_MarkerGroup_Label">${value}px</div></div>`);
            group.append(sm.clone(),lg.clone(),sm.clone(),lg.clone(),sm.clone(),lg.clone(),sm.clone(),lg.clone(),sm.clone());
            this.ruler.append(group);
        }
    }
    componentDidMount(){
        $('.bem-Ruler_Container_Offset').append(this.ruler);
    }
     render(){
         return(
            <div className="bem-BottomBar ruler-bar-visible">
                <div className="bem-Ruler">
                    <div className="bem-Ruler_Devices">
                        <div className="bem-Ruler_Devices_Container showing-devices" style={{left: '1207px'}}>
                            <div className="bem-Ruler_DeviceList">
                                <div className="bem-Ruler_DeviceList_Device">Apple iPad mini 2, 3</div>
                                <div className="bem-Ruler_DeviceList_Device">Apple iPad 1, 2</div>
                                <div className="bem-Ruler_DeviceList_Device">Apple iPad 3, 4, Air</div>
                                <div className="bem-Ruler_DeviceList_Device">Microsoft Surface</div>
                                <div className="bem-Ruler_DeviceList_Device">Apple iPad mini</div>
                                <div className="bem-Ruler_DeviceList_Device">HTC Nexus 9</div>
                            </div>
                        </div>
                    </div>
                    <div className="bem-Ruler_TooltipOffset" style={{left: '1207px'}}>
                        <div className="bem-Ruler_TooltipOffset_WidthTooltip wf-tip dark top">
                            <div className="bem-Ruler_TooltipOffset_WidthTooltip_Label">768px</div>
                            <div className="arrow"></div>
                        </div>
                    </div>
                    <div className="bem-Ruler_Container">
                        <div className="bem-Ruler_Container_Offset" style={{width: '1646px',left: '439px'}}>
                            <div className="bem-Ruler_Container_Offset_QueryRange" style={{width: '223px',left: '768px'}}></div>
                            <div className="bem-Ruler_Container_Offset_DeviceWidths">
                                <div className="bem-Ruler_Container_Offset_DeviceWidths_Device" style={{left: '798px'}}></div>
                                <div className="bem-Ruler_Container_Offset_DeviceWidths_Device" style={{left: '766px'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default BottomRuler;
