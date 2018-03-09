import { combineReducers } from 'redux';

const ico_event=(state={enter:0,click:0},action)=>{
    switch(action.type){
        case 'ICO_CLICK' :
        return Object.assign({},state,{

        });

        case 'ICO_MOUSE_ENTER' :
        return Object.assign({},state,{
                ...action
            });

        case 'ICO_MOUSE_LEAVE' :
        return Object.assign({},state,{
            enter:0
        });
        default:
        return state;
    }
}


//////////--------------------合并---------------------////////////////////////
const reducer=combineReducers({
    ico_event
});
export default reducer;
