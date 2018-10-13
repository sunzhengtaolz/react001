import React, { Component } from 'react';
import EasyDragSort from '../tools/EasyDragSort';
// import '../../../images/傍晚1.jpg'
// import '../../../images/船1.jpg'

import './style/Category.less';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{id: 'a'},{id: 'b'},{id: 'c'},{id: 'd'},{id: 'e'},{id: 'f'}],
            curMoveItem: null
        }
    }

    handleDragMove = (data, from, to) => {
        this.setState({
          curMoveItem: to,
          list: data
        })
      }
    
      handleDragEnd = () =>{
        this.setState({
          curMoveItem: null
        })
      }

    state = {  }
    render() { 
        return ( 
            <div className="main">
                <h3>react-drag-sort</h3>
                <EasyDragSort onDragEnd={this.handleDragEnd} onChange={this.handleDragMove} data={this.state.list} >

                    {this.state.list.map( (item, index) =>{
                    return <div  className={this.state.curMoveItem === index? 'item active' : 'item' }
                        key={item.id}
                        // onClick={()=> {
                        // let newItems = this.state.list.slice();
                        // newItems.splice(index, 1);
                        // this.setState({list: newItems});
                        // }}
                    >  
                        <div className="pic">
                            <div></div>
                        </div>
                        <div className="btn">
                           {item.id}
                        </div>
                    
                    </div>
                    })}
                </EasyDragSort>
            </div>
         );
    }
}
 
export default Category;