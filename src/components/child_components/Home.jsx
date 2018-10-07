import React, { Component } from 'react';
// import Button from 'antd/lib/button';
import './style/Home.less';
import 'antd/lib/button/style/css';
import { Button } from 'antd';

import {increaseActionFunc, decreaseActionFunc} from '../redux/action/Action';
import { connect } from 'react-redux';


class Home extends Component {
    
    render() { 
        const {value, increase, decrease} = this.props;
        return ( 
            <div className="home">
                <div style={{width: '100%', height: '100px', border: '1px solid red', textAlign: 'center', lineHeight: '50px'}}>
                    <p style={{margin: '0', color: '#f40'}}>1.react redux简单计算器应用！</p>
                    <span>value: {value}</span>
                    <Button onClick={increase}>按钮 +</Button>
                    <Button onClick={decrease}>按钮 -</Button>
                </div>
            </div>
         );
    }
}

const mapStateToProps = (state) => {
    return {
        value: state.value
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increase: () => {
            dispatch(increaseActionFunc())
        },
        decrease: () => {
            dispatch(decreaseActionFunc())
        }
    }
}

export default Home = connect(mapStateToProps, mapDispatchToProps)(Home);