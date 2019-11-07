import React from 'react'
import { Table, Divider, Tag,Button,Popconfirm,message } from 'antd';
import RootUpdate from '../../pages/rootupdate/rootupdate'
class Userlist extends React.Component{
    columns = [
        {
            title: '头像',
            key: 'head',
            render:()=>{
                return(
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573109199290&di=2945bf0b2bf788bcc979d4954a28c0f0&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Felement_origin_min_pic%2F01%2F37%2F09%2F22573c3a831082c.jpg" style={{width:50,height:50}}/>
                )
            }
        },
        {
            title: '用户名',
            dataIndex: 'user',
            key: 'user',
        },
        {
            title: '密码',
            dataIndex: 'password',
            key: 'password',
        },
        {
            title: '操作',
            key: 'address',
            render:(data)=>{
                return(
                    <div>
                        <Popconfirm
                            title="确定要删除吗?"
                            onConfirm={this.delRoot.bind(this,data.user)}
                            okText="Yes"
                            cancelText="No"
                        >
                            <Button size='small'>删除</Button>
                        </Popconfirm>
                        <Button size='small' onClick={this.upDateRoot.bind(this,data)}>修改</Button>
                    </div>
                )
            }

        },
    ];
    constructor(){
        super();
        this.state={
            dataSource:[],
            updateShow:false
        }
    }

    componentDidMount(){
        this.getlist()
    }
getlist(){
    this.$axios.post('/hehe/user/uslist').then((data)=>{
        if(data.err===0){
            this.setState({dataSource:data.list})
        }
    })
}
    delRoot=(user)=>{
        this.$axios.post('/hehe/user/dee',{user}).then((data)=>{
            if(data.err===0){
                message.success('删除成功')
            }
            this.getlist()
        })
    };
    upDateRoot=(data)=>{
        this.setState({updateShow:true});
        this.data=data
    };
    cacelUpdate=(state)=>{
        this.getlist()
        if(state===1){
            this.setState({updateShow:false})
        }else {
            this.setState({updateShow:false})
        }

    };
render(){
    let dataSource=this.state.dataSource;
    let data=this.data;
    return(
        <div>
        <Table dataSource={dataSource} columns={this.columns} />
    {!this.state.updateShow||<RootUpdate  cacelUpdate={this.cacelUpdate} data={data}></RootUpdate>}
        </div>
    )
}

}
export default Userlist