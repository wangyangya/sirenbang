import React ,{Component}from 'react';

import {Table,Card,message,Button,Pagination,Popconfirm} from 'antd';

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
            <Popconfirm title="你确定要删除吗？"
             onConfirm={this.delFood.bind(this,data._id)}
            >
                <Button>删除</Button>
            </Popconfirm>
        )
      }
    },
  ];
    constructor(){
        super()
        this.state={
            dataSource:[],
            page:1,
            pageSize:2,
            total:0

        }
    }

    delFood=(_id)=>{
      // console.log('删除'+uid)
        this.$axios.post('./hehe/food/del',{_id}).then((data)=>{
            if(data.err === 0){
                message.success('删除成功')
                //删除成功后请求最新数据，刷新页面

                this.getDoodlist(this.state.page,this.state.pageSize)

            }
        })
    }

    componentDidMount(){
        this.getDoodlist(this.state.page,this.state.pageSize)
    }
    getDoodlist=(page,pageSize)=>{
        this.$axios.post('./hehe/food/getInfoByPage',{page,pageSize})
        .then((data)=>{
            console.log(data)
           if(data.err===0){
               this.setState({dataSource:data.info.list,total:data.info.count,page:page})
           }
        })
    }
    pageChang=(page,pageSize)=>{
        this.getDoodlist(page,pageSize)
    }
    render(){
        let {dataSource,page,pageSize,total}=this.state
        return(
            <div>
               <Card title="菜单管理列表">

                 <Table 
                    pagination={false}
                    dataSource={dataSource}
                    columns={this.columns}
                     rowKey={'_id'}
                  />
                 <Pagination simple current={page} total={total} pageSize={pageSize}
                     onChange={this.pageChang}
                 />

              </Card>
                
            </div>
        )
    }
}
export default Rootlist;