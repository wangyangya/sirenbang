import React from 'react'
import { Form, Icon, Input, Button, Checkbox,Card } from 'antd';
import Style from '../reg/reg.module.less'
class Reg extends React.Component{


    submit=()=>{
        this.props.form.validateFields((err,userinfo)=>{
            if(err){
                alert('111')
            }else {
                this.$axios.post('/hehe/user/reg',userinfo)
                    .then((data)=>{
                    if(data.err===0){
                        setTimeout(()=>{
                            this.props.history.push('/login')
                        },1000)

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