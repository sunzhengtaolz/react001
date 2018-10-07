import {
    INCREASE, DECREASE
} from "../action/Action";
 
const changeValue=(state={value:0}, action)=>{
    switch(action.type){
        case INCREASE:
            return {...state,value:state.value+1};
            //return {value:state.value+1};//这样写也ok
        case DECREASE:
            return {...state,value:state.value-1};
        default:
            return state;
    }
}
 
export default changeValue;
