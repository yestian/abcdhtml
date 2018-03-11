import React, { Component } from 'react';
import AddEleLayout from './addEleLayout';
import AddEleBasic from './addEleBasic';
import AddEleTypography from './addEleTypography';
import AddEleCMS from './addEleCMS';
import AddEleMedia from './addEleMedia';
import AddEleForms from './addEleForms';
import AddEleComponents from './addEleComponents';

class AddElements extends Component{
     render(){
         return(
             <div>
                <AddEleLayout/>
                <AddEleBasic/>
                <AddEleTypography/>
                <AddEleCMS/>
                <AddEleMedia/>
                <AddEleForms/>
                <AddEleComponents/>
            </div>
        )
    }
}
export default AddElements;
