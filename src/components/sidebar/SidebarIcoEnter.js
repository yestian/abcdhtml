import React from 'react';

function SidebarIcoEnter(props){
        if(!!props.icoprops.enter!==false){
            let ico=props.icoprops;
            let tooltip={
                position: 'absolute',
                pointerEvents: 'none',
                opacity: 1,
                transform: 'translate3d(0px, 0px, 0px)',
                top:`${ico.top}px`,
                left:`${ico.left}px`
            }
            let svg={
                display: 'block',
                overflow: 'visible',
                position: 'absolute',
                height:' 26px',
                width:`${ico.width}px`,
                borderRadius: 0,
                color: 'currentcolor'
            }
            let path={
                strokeWidth: 0,
                stroke: 'black'
            }
            let tip={
                position: 'relative',
                width:`${ico.width}px`,
                textAlign:'center'
            }
            let width=ico.width?ico.width:1;
            let viewBox=`0 0 ${width} 26`;
            //--------------------------------------------------
            if(ico.dataId==="topbar-undo" || ico.dataId==="topbar-redo"){
                return (
                    <div className="bem-GuidanceTooltip" style={{...tooltip}}>
                        <svg viewBox={viewBox} style={{...svg}}>
                            <path d={ico.path} clipPath={ico.clipPath} fill="currentColor" style={{...path}}></path>
                        </svg>
                        <div className="bem-GuidanceTooltip_Body" style={{...tip}}>{ico.tiptext}</div>
                    </div>
                )
            }else if(ico.dataId==="change-saved"){
                return (
                    <div className="bem-Tooltip bem-Tooltip-success" style={{...tooltip}}>
                        <svg viewBox={viewBox} style={{...svg}}>
                            <path d={ico.path} clipPath={ico.clipPath} fill="currentColor" style={{...path}}></path>
                        </svg>
                        <div className="bem-Tooltip_Body" style={{...tip}}>{ico.tiptext}</div>
                    </div>
                )
            }else{
                return (
                    <div>
                        <div className="bem-Tooltip" style={{...tooltip}}>
                            <svg viewBox={viewBox} style={{...svg}}>
                                <path d={ico.path} clipPath={ico.clipPath} fill="currentColor" style={{...path}}></path>
                            </svg>
                            <div className="bem-Tooltip_Body" style={{...tip}}>{ico.tiptext}</div>
                        </div>
                    </div>
                )
            }
        }else{
            return '';
        }


}

export default SidebarIcoEnter;
