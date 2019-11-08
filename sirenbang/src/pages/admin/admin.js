import React from 'react'
// import Style from './index.module.less'
 import Modal from '../../components/modal/modal'
import { Layout, Menu, Icon,Dropdown,Button,Popconfirm, message } from 'antd';
import {withRouter} from 'react-router-dom'
import CustomSlider from '../../components/customSlider/customSlider'
import TopStyle from '../../components/top/Topstyle'
const { Header, Content, Footer, Sider } = Layout;

class Admin extends React.Component {



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
                    <Header style={{background: '#fff', padding: 0,display:'flex',justifyContent: 'flex-end',alignItems:'center',paddingRight:50,}}>
                        <TopStyle></TopStyle>
                    </Header>
                    <Content style={{margin: '24px 16px 0', overflow: 'initial'}}>
                        <div style={{padding: 24, background: '#fff', textAlign: 'center'}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>我崔佳丽是最靓的崽</Footer>
                </Layout>
                <Modal></Modal>
            </Layout>
        )
    }
}


export default withRouter(Admin)