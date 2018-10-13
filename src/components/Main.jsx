import React, { Component } from 'react';
import { 
    BrowserRouter as Router, 
    Route, 
    NavLink,
    Switch,
} from 'react-router-dom';
import Home from './child_components/Home';
import Category from './child_components/Category';
import Product from './child_components/Product';
import Contact from './child_components/Contact';
import './Main.less';
class Main extends Component {
    constructor(props) {
        super(props)

        this.state = { 
            menuIds: [{
                menuId: 1,
                path: '/',
                menuName: '首页',
                component: 'Home'
            },{
                menuId: 2,
                path: '/category',
                menuName: '分类',
                component: 'Category'
            },{
                menuId: 3,
                path: '/product',
                menuName: '异步',
                component: 'Product'
            },{
                menuId: 4,
                path: '/contact',
                menuName: '联系我们',
                component: 'Contact'
            }]
         }
    }
    
    render() { 
        let { menuIds } = this.state;
        return ( 
            <Router>
                <div className="main">
                    <nav>
                        {/* <ul> */}
                            {
                                menuIds.map((item, index) => 
                                    <li key={item.menuId}><NavLink to={item.path}>{item.menuName}</NavLink></li>
                                )
                            }
                        {/* </ul> */}
                    </nav>
                    <div className="wrapper">
                        <Switch>
                            <Route exact path='/' component={ Home }/>
                            <Route path='/category' component={ Category }/>
                            <Route path='/product' component={ Product }/>
                            <Route path='/contact' component={ Contact }/>
                            <Route path='*' component={ Home }/>
                        </Switch>
                    </div>
                </div>
            </Router>
         );
    }
    
}

export default Main;