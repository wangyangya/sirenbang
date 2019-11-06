import React ,{Component,Fragment}from 'react';
import {Table,Card,Pagination, message} from 'antd';
import UpData from './upData'

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
        title: '新品类别',
        dataIndex: 'typename',
        key: 'dd',
    },
    {
        title: '新品种类',
        dataIndex: 'typeid',
        key: 'ee',
        render:(data)=>{
            let obj=['种类一','种类二','种类三','种类四','种类五','种类六','种类七'];
            return(<span>
                {obj[data-1]}
            </span>)
        }
    },
    {
        title: '新品图片',
        dataIndex: 'img',
        key: 'ff',
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
        return(
          <Fragment>
                <button>删除</button>
              <button onClick={()=>{
                 this.setState({isShow:true,upData:data})
              }
              }>修改</button>
          </Fragment>
        )
      }
    },
  ]
    constructor(){
        super()
        this.state={
            dataSource:[],
            page:1,
            pageSize:2,
            total:0,
            isShow:false,
            upData:{}

        }
    }
    
    componentDidMount(){
        this.getDoodlist(this.state.page,this.state.pageSize)
    }
    getDoodlist=(page,pageSize)=>{
        this.$axios.post('./hehe/food/getInfoByPage',{page,pageSize})
        .then((data)=>{
            // console.log(data)
           if(data.err===0){
               this.setState({dataSource:data.info.list,total:data.info.count,page:page})
           }
        })
    }
    pageChang=(page,pageSize)=>{
        this.getDoodlist(page,pageSize)
    }
    //修改页面的开关
    isShow=(bool)=>{
        this.setState({isShow:bool})
    }
    //修改数据
    submit=(name,price,desc,typename,typeid,img,_id)=>{
        let {page,pageSize}=this.state
        this.isShow(false)
        this.$axios.post('hehe/food/update',{name,price,desc,typename,typeid,img,_id})
        .then((data)=>{
           if(data.err===0){
            message.success('修改成功了')
            this.getDoodlist(page,pageSize)
           }
        })
       
    }
    render(){
        let {dataSource,page,pageSize,total,isShow,upData}=this.state
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
              {isShow&&<UpData upData={upData} isShow={this.isShow} submit={this.submit}></UpData>}
            </div>
        )
    }
}
export default Rootlist;