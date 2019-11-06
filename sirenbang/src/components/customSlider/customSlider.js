import React from 'react'
import {withRouter} from 'react-router-dom'
import { Menu, Icon,Layout, Breadcrumb } from 'antd';
import webStorage from '../../utils/webstorage'
const { SubMenu } = Menu;


// const root=webStorage.getItem('rootList')
class CustomSlider extends React.Component{
    jump=(path)=>{
        this.props.history.push(path)
    };

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
    //                 <Menu.Item onClick={this.jump.bind(this,item.path)}>首页</Menu.Item>
    //             )
    //         }
    //     })
    // }

    render(){
        return(
            <Layout style={{ minHeight: '100vh' }}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Option 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="desktop" />
                            <span>Option 2</span>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                  <Icon type="user" />
                  <span>User</span>
                </span>
                            }
                        >
                            <Menu.Item key="3">Tom</Menu.Item>
                            <Menu.Item key="4">Bill</Menu.Item>
                            <Menu.Item key="5">Alex</Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={
                                <span>
                  <Icon type="team" />
                  <span>Team</span>
                </span>
                            }
                        >
                            <Menu.Item key="6">Team 1</Menu.Item>
                            <Menu.Item key="8">Team 2</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9">
                            <Icon type="file" />
                            <span>File</span>
                        </Menu.Item>
                    </Menu>

            </Layout>
        )
    }
}
export default withRouter(CustomSlider)