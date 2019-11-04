import React from 'react'
import { Form, Icon, Input, Button, Checkbox,Card } from 'antd'
import Style from "../login/login.module.less"
class Addlist extends React.Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div className={Style.login}>
              <Card title='会员信息修改' className={Style.loginCard}>
                <div className="login-form">
                  <Form.Item>
                      {getFieldDecorator('userName', {})(
                          <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                          />,
                      )}
                  </Form.Item>
                  <Form.Item>
                      {getFieldDecorator('passWord', {})(
                          <Input
                              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                              type="password"
                              placeholder="Password"
                          />,
                      )}
                  </Form.Item>
                  <Form.Item>
                    <div className={Style.Item}>
                      <Button type='primary' className="login-form-button">
                        修改
                      </Button>
                      <Button type='primary' className="login-form-button">
                        返回
                      </Button>
                    </div>
                  </Form.Item>
                </div>
              </Card>
            </div>
        )
    }
}
export default Form.create()(Addlist)