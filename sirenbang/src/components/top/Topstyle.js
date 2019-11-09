import React,{Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import Style from './nav.module.less'
import { Modal, Button } from 'antd';
class TopStyle extends React.Component{
    constructor(){
        super();
        this.state={

            visible: false
        }
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        this.logout();
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        this.setState({
            visible: false,
        });
    };
    logout = () => {
        this.props.history.replace('/login')
    };
    render(){
        return(
            <Fragment>
            <div className={Style.good}>
                <a>{JSON.parse(localStorage.user)}</a>&nbsp;欢迎您！
            </div>
            <div className={Style.del} onClick={this.showModal}>
                    <button type='primary' className={Style.btn}>退出</button>
                </div>
            <Modal
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    确定要退出吗！Cancel or ok
                </Modal>
            </Fragment>
        )
    }
}
export default withRouter(TopStyle)