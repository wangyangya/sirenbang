import React ,{Component,Fragment}from 'react';
import {Table,Card,message,Button} from 'antd';
/*
1.查看所有管理员信息
  a.请求数据
  b.列表展示
2.删除管理员
3.修改管理员权限
*/
  
class Rootlist extends Component{
  columns=[
    {
      title: '新品名称',
      dataIndex: 'name',
      key: 'aa',
    },
    {
      title: '新品价格',
      dataIndex: 'price',
      key: 'bb',
    },
    {
        title: '新品描述',
        dataIndex: 'desc',
        key: 'cc',
    },
    {
        title: '新品种类',
        dataIndex: 'typename',
        key: 'dd',
    },
    {
        title: '新品图片',
        dataIndex: 'img',
        key: 'ee',
        render:(data)=>{
            return(
                <div>
                    <img src={data} style={{width:50,height:50}}/>
                </div>
            )
        }
    },
    {
      title: '操作',
      key: 'action',
      render:(data)=>{
          console.log('删除按钮',data)
        return(
                <button onClick={this.delFood.bind(this,data._id)}>删除</button>
        )
      }
    },
  ];
    constructor(){
        super()
        this.state={
            dataSource:[]

        }
    }

    delFood=(_id)=>{
      // console.log('删除'+uid)
        this.$axios.post('./hehe/food/del',{_id}).then((data)=>{
            if(data.err === 0){

                //删除成功后请求最新数据，刷新页面
                this.getDoodlist()
                message.success('删除成功')
            }
        })
    }

    componentDidMount(){
        this.getDoodlist()
    }
    getDoodlist=()=>{
        this.$axios.post('./hehe/food/getInfoByType',{typeid:1})
        .then((data)=>{
           if(data.err===0){
               this.setState({dataSource:data.list})
           }
        })
    }
    render(){
        let {dataSource}=this.state
        return(
            <div>
               
               <Card title="菜单管理列表">
                 <Table dataSource={dataSource} columns={this.columns} rowKey={'_id'}/>;
              </Card>
                
            </div>
        )
    }
}
export default Rootlist;