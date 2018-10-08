import React, { Component } from 'react';
import axios from 'axios';

class Product extends Component {
    state = { 
        data: [],
        axiosData: [],
        sqlData: [],
        inputValue: ''
     }

    // getAjaxInfo = () => {
    //     let url = 'https://www.easy-mock.com/mock/5b8944fda3c04e6853e33f3e/react/ad/adcount';
    //     let url = 'https://api.github.com/users/chriscoyier/repos';
    //     let url = 'http://127.0.0.1:1337/text/text'
    //     fetch(url)
    //         .then(res => {console.log(res)}) 
    //         .then((response) => {
    //             response.json()
    //         })
    //         .then((data) => { 
    //             console.log(data)
    //             this.setState({
    //                 data: data
    //             })
    //         })
    //         .catch(error => console.log('error is', error));
    // }

    getAjaxInfo1 = () => {
        let url = 'http://127.0.0.1:1337'
        fetch(url).then((promise) => {
            promise.text().then((data) => {
                data = JSON.parse(data);
                this.setState({
                    data: data.data
                })
            })
        })
    }
    getAjaxInfo2 = () => {
        let url = 'http://127.0.0.1:1337/test'
        fetch(url).then((promise) => {
            promise.text().then((data) => {
                data = JSON.parse(data);
                this.setState({
                    data: data.data
                })
            })
        })
    }
    getAjaxInfo3 = () => {
        let url = 'http://127.0.0.1:1337/test/a'
        fetch(url).then((promise) => {
            promise.text().then((data) => {
                data = JSON.parse(data);
                this.setState({
                    data: data.data
                })
            })
        })
    }

    getAxiosInfo = () => {
        this.getAxiosBase({
            method: 'GET',
            params: {}
        }).then((data) => {
            if(data.data.code === 200) {
                this.setState({
                    axiosData: data.data.data
                })
            }
        })
    }
    getAxiosBase = (obj) => {
        const url = 'http://127.0.0.1:1337';
        return axios(url, obj);
    }

    getInputValue = (value) => {
        this.setState({
            inputValue: value
        })
    }

    selectOne = () => {
        axios("http://127.0.0.1:1337/query", {
            method: 'GET',
            params: {
                id: 1
            }
        }).then((data) => {
            if(data.data != '') {
                this.setState({
                    sqlData: data.data.row
                })
            }
        })
    }
    insertOne = () => {
        axios("http://127.0.0.1:1337/add", {
            method: 'post',
            data: {}
        }).then((data) => {
            
        })
    }
    updateOne = () => {

    }
    deleteOne = () => {

    }

    render() { 
        let {data, axiosData} = this.state;
        return ( 
            <div className='product'>
                <div style={{width: '100%', height: '200px', borderBottom: '1px solid #e1e1e1'}}>
                    fetch1获取数据：<button onClick={this.getAjaxInfo1}>getAjaxInfo1</button>
                    fetch2获取数据：<button onClick={this.getAjaxInfo2}>getAjaxInfo2</button>
                    fetch3获取数据：<button onClick={this.getAjaxInfo3}>getAjaxInfo3</button>
                    <div>
                        {
                            data.map((item, index) => 
                                <p key={index} style={{margin: '0'}}>{item.id + ' - ' + item.name + ' - ' + item.age}</p>
                            )
                        }
                    </div>
                </div>
                <div style={{width: '100%', height: '200px', borderBottom: '1px solid #e1e1e1'}}>
                    fetch上传数据：<button onClick={this.setAjaxInfo}>setAjaxInfo</button>
                    {' '}
                    <input defaultValue='请输入内容...'/>
                </div>
                <div style={{width: '100%', height: '200px', borderBottom: '1px solid #e1e1e1'}}>
                    Axios获取数据：<button onClick={this.getAxiosInfo}>getAxiosInfo</button>
                    <div>
                        {
                            axiosData.map((item, index) => 
                                <p key={index} style={{margin: '0'}}>{item.id + ' - ' + item.name + ' - ' + item.age}</p>
                            )
                        }
                    </div>    
                </div>
                <div style={{width: '100%', height: '200px', borderBottom: '1px solid #e1e1e1'}}>
                    Mysql基本操作：<input value={this.state.inputValue} onClick={this.getInputValue}/>
                    <button style={{margin: '0 16px'}} onClick={this.selectOne}>select ad表</button>
                    <button style={{margin: '0 16px'}} onClick={this.insertOne}>insert ad表</button>
                    <button style={{margin: '0 16px'}} onClick={this.updateOne}>update ad表</button>
                    <button style={{margin: '0 16px'}} onClick={this.deleteOne}>delete ad表</button>
                    <div>
                        {
                            this.state.sqlData.map((item, index) => 
                                <p key={index} style={{margin: '0'}}>{item.id + ' - ' + item.adName + ' - ' + item.adOwner + ' - ' + item.begin + ' - ' + item.end}</p>
                            )
                        }
                    </div> 
                </div>
            </div>
            
         );
    }
}
 
export default Product;