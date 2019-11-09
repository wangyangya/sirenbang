import React from 'react'
import { Layout, Menu, Icon,Dropdown,Button ,Popconfirm} from 'antd';
import webstorage from '../../utils/webstorage'
import Store from '../../store/store'
import actionCreater from '../../store/actionCreator'
// import {withRouter} from 'react-router-dom'
const {  Content, Footer} = Layout;
class Setting extends React.Component {
    constructor(){
        super()
        this.state={
            isShow:localStorage.color
        }
    }
    renderMenu = () => {
        let {tokenModal}=Store.getState()
        return (
            <Menu>
                <Menu.Item>
                    <Popconfirm
                        title="确定切换模式吗?"
                        onConfirm={this.checkout}
                        okText="Yes"
                        cancelText="No"
                    >
                        <span>切换日/夜模式</span>
                    </Popconfirm>
                </Menu.Item>
            </Menu>

        );
    };
    checkout = () => {
        let {tokenModal}=Store.getState()
        let action = actionCreater.changeTokenModal(!tokenModal)
        Store.dispatch(action)
    };
    componentDidMount(){
        Store.subscribe(()=>{
            this.setState({})
        })
    }
    render() {
        return (
            <Layout>

                <Layout style={{marginLeft: 50}}>

                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        <div style={{padding: 24,  textAlign: 'center'}}>
                            <Dropdown overlay={this.renderMenu} placement="bottomLeft">
                                <Button>切换模式</Button>
                            </Dropdown>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>

                    </Footer>
                </Layout>
            </Layout>
        )
    }
}


export default Setting