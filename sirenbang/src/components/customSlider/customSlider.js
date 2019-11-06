import React from 'react'
import {withRouter} from 'react-router-dom'
import { Menu, Icon } from 'antd';
import webStorage from '../../utils/webstorage'
const { SubMenu } = Menu;


// const root=webStorage.getItem('rootList')
const root=[
    {name:'首页',
    path:'/admin/home',
    key:'/admin/home'},
    {name:'用户管理',
        path:'/admin/user',
        key:'/admin/user',
        children:[
            {name:'查看用户信息',
                path:'/admin/list',
                key:'/admin/list'},
            {name:'修改用户信息',
                path:'/admin/update',
                key:'/admin/update'},
        ]
    },
    {name:'菜单',
        path:'/admin/food',
        key:'/admin/food',
        children:[
            {name:'查看菜单',
                path:'/admin/foodlist',
                key:'/admin/foodlist'},
            {name:'修改菜单',
                path:'/admin/updatefood',
                key:'/admin/updatefood'},
            {name:'增加菜单',
                path:'/admin/addfood',
                key:'/admin/addfood'},
        ]
    },
    {name:'设置',
        path:'/admin/setting',
        key:'/admin/setting'},

]
class CustomSlider extends React.Component{
    jump=(path)=>{
        this.props.history.push(path)
    }

    // renderItem=(data)=>{
    //     // 1、判断有没有children, 有=>sub  没有=>item
    //     return data.map((item,index)=>{
    //         if(item.subprime){
    //             // 渲染次级
    //             return(
    //                 <SubMenu title={item.name}>
    //                     {this.renderItem(item.subprime)}
    //                 </SubMenu>
    //             )
    //         }else{
    //             return(
    //                 <Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>
    //             )
    //         }
    //     })
    // }

    render(){
        return(
            <Menu style={{ width: 256 }} mode="vertical" theme='dark'>
                {/*{this.renderItem(root)}*/}
                {root.map((item,index)=>{
                    if(item.children){
                        return(
                            <SubMenu title={item.name}>
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