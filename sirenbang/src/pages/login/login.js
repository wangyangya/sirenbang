import React from 'react'
import { Form, Icon, Input, Button, Checkbox ,Card} from 'antd';
import Style from './login.module.less'
class Login extends React.Component{
    submit=()=>{

        //console.log(this.state)
        // getFieldsValue 获取双向绑定的数据，没有校验效果
        //let result=this.props.form.getFieldsValue();
        this.props.form.validateFields((err,userinfo)=>{
            //err验证是不是通过
            if (err){
                message.error('输入信息有误请重试')
            } else{
                this.$axios.post('/haha/v1/admin/user/login',userinfo)
                    .then((data)=>{
                        console.log(data)
                        if(data.err===0){
                            //存值
                            webStorage.setItem('rootList',data.rootList)
                            webStorage.setItem('token',data.token)
                            webStorage.setItem('uid',data.uid)
                            //跳转到首页
                            console.log('跳转')
                            this.props.history.push('/admin')
                        }else {

                        }
                    })
                message.success('登录成功，1后跳转首页')
            }
        })
        //console.log(result)
    }
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