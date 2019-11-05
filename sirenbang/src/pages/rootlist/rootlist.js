import React from 'react'
import {Table} from 'antd'
  const columns = [
    {
      title: '账号',
      dataIndex: 'useName',
      key: 'useName',
    },
    {
      title: '密码',
      dataIndex: 'passWord',
      key: 'passWord',
    },
    {
      title: '权限等级',
      dataIndex: 'rootLevel',
      key: 'rootLevel',
    },
  ]; 
class Rootlist extends React.Component{
    constructor(){
        super()
        this.state={
            dataSource:[]
        }
    }
    componentDidMount(){
        this.getRootlist()
    }
    // getRootlist(){
    //     this.$axios.post('hehe/root/list',{token:token})
    //     .then((data)=>{
    //         console.log(data)
    //     })
    // }
    render(){
        let dataSource=this.state.dataSource
        return(
            <Table dataSource={dataSource} columns={columns} />
        )
    }
}
export default Rootlist