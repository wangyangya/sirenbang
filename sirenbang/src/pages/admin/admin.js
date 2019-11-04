import React from 'react'
import {withRouter} from 'react-router-dom'
class Admin extends React.Component{
  render(){
    return(
      <div>
        这里是主页admin
        <button onClick={()=>{
            this.props.history.push('/login')
        }}>去登陆页面</button>            
        <button onClick={()=>{
            this.props.history.push('/admin/addlist')
        }}>去会员修改页面</button>
        <button onClick={()=>{
            this.props.history.push('/admin/rootlist')
        }}>去会员列表页面</button>
        {this.props.children}
      </div>
    )
  }
}
export default withRouter(Admin);