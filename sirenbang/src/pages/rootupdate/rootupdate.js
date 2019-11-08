import React from 'react'
import {Card,message} from 'antd'
import Style from './upDate.module.less'
class RootUpdate extends React.Component{
    constructor(props){
        super();
         this.state=props.data
    }
    componentWillReceiveProps(props){

    };
    submit=(data)=>{
        //  let {user,password}=this.state;
        let uid=this.state._id;
        let user=this.state.user;
        let password=this.state.password;
        this.$axios.post('./hehe/user/updateUser',{_id:uid,user,password}).then((data)=>{
           if(data.err===0){
               message.success('修改成功')
               this.props.cacelUpdate();
           }
        })
    };
    render(){
          let {user,password}=this.state;
        return(
            <div className={Style.upDate}>
                <Card title='管理员修改'>
                    <label>管理员账号:</label>
                    <input type="text" value={user}  onChange={(e)=>{
                        this.setState({user:e.target.value})
                    }}/>
                        <br/>
                    <label>管理员密码:</label>
                    <input type="text" value={password} onChange={(e)=>{
                        this.setState({password:e.target.value})
                    }}/>
                        <br/>
                    <button onClick={()=>{
                        this.props.cacelUpdate(0)
                    }}>取消</button>
                    <button onClick={this.submit}>点击修改</button>
                </Card>
            </div>
        )
    }
}
export default RootUpdate