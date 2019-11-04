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
            
        {this.props.children}
      </div>
    )
  }
}
export default withRouter(Admin);