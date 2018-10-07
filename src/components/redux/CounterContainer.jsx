import {connect} from 'react-redux'
import Counter from './Count'
import {increaseActionFunc,decreaseActionFunc} from "./Action";
 
const mapStateToProps=(state)=>({
    value:state.value
})
 
const mapDispatchToProps=(dispatch)=>({
    onIncClick:()=>dispatch(increaseActionFunc()),
    onDecClick:()=>dispatch(decreaseActionFunc())
})
 
const MyCounterApp=connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);
export default MyCounterApp;
