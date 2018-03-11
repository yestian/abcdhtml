import React,{Component} from 'react';
import ToolsA from './toolsA';

class ToolsFlux extends Component{
     render(){
         return(
            <div id="tools-flux">
                <div className="bem-Tools">
                    <ToolsA/>
                    {/* <ToolsB/>
                    <ToolsC/>
                    <ToolsD/> */}
                </div>
            </div>
        )
    }
}
export default ToolsFlux;
