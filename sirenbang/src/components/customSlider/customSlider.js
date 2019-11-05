import React from 'react'
import {withRouter} from 'react-router-dom'
import { Menu, Icon } from 'antd';
import webStorage from '../../utils/webstorage'
const { SubMenu } = Menu;


// const root=webStorage.getItem('rootList')
class CustomSlider extends React.Component{
    jump=(path)=>{
        this.props.history.push(path)
    }

    renderItem=(data)=>{
        // 1、判断有没有children, 有=>sub  没有=>item
        return data.map((item,index)=>{
            if(item.subprime){
                // 渲染次级
                return(
                    <SubMenu title={item.name}>
                        {this.renderItem(item.subprime)}
                    </SubMenu>
                )
            }else{
                return(
                    <Menu.Item key={item.key} onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>
                )
            }
        })
    }

    render(){
        return(
            <Menu style={{ width: 256 }} mode="vertical" theme='dark'>
                {/*{this.renderItem(root)}*/}

            </Menu>
        )
    }
}
export default withRouter(CustomSlider)