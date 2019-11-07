import React from 'react'
// import Style from './index.module.less'
 import Modal from '../../components/modal/modal'
import { Layout, Menu, Icon,Dropdown,Button,Popconfirm, message } from 'antd';
import {withRouter} from 'react-router-dom'
import CustomSlider from '../../components/customSlider/customSlider'
const { Header, Content, Footer, Sider } = Layout;

class Admin extends React.Component {

    renderMenu = () => {
        return (
            <Menu>
                <Menu.Item>
            <Popconfirm
                title="确定退出吗?"
                onConfirm={this.logout}
                okText="Yes"
                cancelText="No"
            >
                        <span>用户注销</span>
            </Popconfirm>
                </Menu.Item>
    </Menu>

        );
    };
    logout = () => {
        this.props.history.replace('/login')
    };

    render() {
        return (
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}
                >
                    <CustomSlider></CustomSlider>

                </Sider>
                <Layout style={{marginLeft: 200}}>
                    <Header style={{background: '#fff', padding: 0}}>
                        <Dropdown overlay={this.renderMenu} placement="bottomLeft">
                            <Button>用户信息</Button>
                        </Dropdown>
                    </Header>
                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        <div style={{padding: 24, background: '#fff', textAlign: 'center'}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
                {/*<Modal></Modal>*/}
            </Layout>
        )
    }
}


export default withRouter(Admin)