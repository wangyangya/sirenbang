import React from 'react'
import { Form, Icon, Input, Button, Checkbox ,Card} from 'antd';
import Style from './login.module.less'
import withRouter from 'react-router-dom'
class Login extends React.Component{
  render(){
      const { getFieldDecorator } = this.props.form;
      return (
          <div className={Style.login}>
            <Card title='用户登录' className={Style.loginCard}>
              <div className="login-form">
                <Form.Item>
                    {getFieldDecorator('userName', {
                        rules: [{ required: true, message: 'Please input your username!' },
                            { min:3, message: '用户名最小长度3位!' },
                            { max:9, message: '用户名最大长度9位!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('passWord', {
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
                  <div className={Style.Item}>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住密码</Checkbox>)}
                    <Button type='primary' className="login-form-button">
                      登录
                    </Button>
                  <a className="login-form-forgot" href="">
                    忘记密码
                  </a>

                  </div>
                </Form.Item>
              </div>
            </Card>
          </div>
      )
  }
}
export default Form.create()(Login);