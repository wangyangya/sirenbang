import React from 'react'
import {withRouter} from 'react-router-dom'
import { Menu, Icon } from 'antd'
import store from '../../store/store'
const { SubMenu } = Menu;


const root=[
    {name:'首页',
    path:'/admin/home',
    key:'/admin/home'},
    {name:'用户管理',
        path:'/admin/list',
        key:'/admin/list',
    },
    {name:'菜单',
        path:'/admin/food',
        key:'/admin/food',
        children:[
            {name:'查看菜单',
                path:'/admin/foodlist',
                key:'/admin/foodlist'},
            {name:'增加菜单',
                path:'/admin/addfood',
                key:'/admin/addfood'},
        ]
    },
    {name:'设置',
        path:'/admin/setting',
        key:'/admin/setting'},

];
class CustomSlider extends React.Component{
    jump=(path)=>{
        this.props.history.push(path)
    };
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render(){
        let {tokenModal}=store.getState()
        // console.log(tokenModal)
        return(
            <Menu style={{ width: 200 ,height:660}} mode="vertical" theme={tokenModal?'dark':'white'}>
                {/*{this.renderItem(root)}*/}
                {root.map((item,index)=>{
                    if(item.children){
                        return(
                            <SubMenu title={item.name} key={index}>
                                {item.children.map((citem,index)=>{
                                    return(
                                        <Menu.Item key={citem.key} onClick={this.jump.bind(this,citem.path)}>{citem.name}</Menu.Item>

                                    )
                                })}
                            </SubMenu>
                        )
                    }else{
                        return(
                            <Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>
                        )
                    }

                })}
            </Menu>
        )
    }
}
export default withRouter(CustomSlider)