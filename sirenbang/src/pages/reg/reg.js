import React from 'react'
import { Form, Icon, Input, Button, Checkbox,Card } from 'antd';
import Style from '../reg/reg.module.less'
import webstorage from '../../utils/webstorage'
class Reg extends React.Component{

    MailCode=()=>{
        this.props.form.validateFields((err,userinfo)=>{
            if(err){
                alert('111')
            }else {
                this.$axios.post('/hehe/user/getMailCode',userinfo)
                    .then((data)=>{
                        console.log(data)
                    })
            }
        })

    };
    submit=()=>{
        let code=this.refs.sss.state.value;
        this.props.form.validateFields((err,userinfo)=> {
            let user = userinfo.user;
            let password = userinfo.password;
            let mail = userinfo.mail;

            if (err) {
                alert('输入错误')
            } else {
                this.$axios.post('/hehe/user/reg', {code: code, user: user, password: password, mail: mail})
                    .then((data) => {
                        if (data.err === 0) {
                            setTimeout(() => {
                                this.props.history.push('/login')
                            }, 1000)
                        } else if (data.err === -3) {
                            alert('用户已存在！')
                        }

                    })
            }
        })
    };
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={Style.reg}>
                <Card title='四人帮小饭馆注册系统' className={Style.loginCard}>
                    <div className="login-form">
                <Form.Item>
                    {getFieldDecorator('user', {
                        rules: [{ required: true, message: 'Please input your username!' },
                            { min:3, message: '用户名最小长度3位!' },
                            { max:9, message: '用户名最大长度9位!' }]
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('user', {
                                rules: [{ required: true, message: 'Please input your username!' },
                                    { min:3, message: '用户名最小长度3位!' },
                                    { max:9, message: '用户名最大长度9位!' }]
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('mail', {
                                rules: [{ required: true, message: 'Please input your Mail!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="mail"
                                    placeholder="Mail"
                                />,
                            )} <button onClick={this.MailCode}>获取验证码</button>

                                <Input type='text' ref='sss' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />,
                        </Form.Item>
                <Form.Item>

                            <Input type='text' ref='sss' prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} />,
                        </Form.Item>
                        <Form.Item>

                            <Button onClick={this.submit} type="primary" htmlType="submit" className="login-form-button">注册
                            </Button>
                        </Form.Item>
                    </div>
                </Card>
            </div>
        );
    }
}
export default Form.create()(Reg)
