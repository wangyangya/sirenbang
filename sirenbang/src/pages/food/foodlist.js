
import React ,{Component,Fragment}from 'react';
import UpData from './upData'
import {Table,Card,message,Button,Pagination,Popconfirm,Input,Select} from 'antd';
const {Search} =Input;
const { Option } = Select;
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
            <Popconfirm title="你确定要删除吗？"
             onConfirm={this.delFood.bind(this,data._id)}
       >
              <Button>删除</Button>
            </Popconfirm>
              <Button onClick={()=>{
                 this.setState({isShow:true,upData:data})
              }
              }>修改</Button>
          </Fragment>

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
            total:0,
            isShow:false,
            upData:{},

        }
    }

    delFood=(_id)=>{
      // console.log('删除'+uid)
        this.$axios.post('./hehe/food/del',{_id}).then((data)=>{
            if(data.err === 0){
                message.success('删除成功')
                //删除成功后请求最新数据，刷新页面
                //边界判断解决当前页大于总页数，强制归同
                if(this.state.page>this.state.total/this.state.pageSize){
                    this.getDoodlist(Math.floor(this.state.total/this.state.pageSize),this.state.pageSize)
                }else{
                    this.getDoodlist(this.state.page,this.state.pageSize)
                }
            }
        })
    }

    componentDidMount(){
        this.getDoodlist(this.state.page,this.state.pageSize)
    }
    getDoodlist=(page,pageSize)=>{
        this.$axios.post('./hehe/food/getInfoByPage',{page,pageSize})
        .then((data)=>{
           if(data.err===0){
               //边界判断
               let tempage=page
               if(Math.ceil(data.info.count/this.state.pageSize)<page){
                    // console.log(data.info.count)
                   tempage=Math.ceil(data.info.count/this.state.pageSize)
               }
               this.setState({dataSource:data.info.list,total:data.info.count,page:tempage})
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
    //关键字查找
    onSearchList=(value)=>{
        this.$axios.post('hehe/food/getInfoByKw',{kw:value})
        .then((data)=>{
            if(data.list.length>0){
                this.setState({dataSource:data.list,total:1})
            }else{
                message.error('没有匹配的搜索结果')
            }
            
        })
    }
    render(){
        let {dataSource,page,pageSize,total,isShow,upData}=this.state
        return(
            <div>
                <Search
                    placeholder="输入你要搜索的内容"
                    enterButton="Search"
                    size="large"
                    onSearch={(value)=>{
                         this.onSearchList(value)
                    }}
                    />
               <Card title="菜单管理列表">
                 <Table  
                    pagination={false}
                    dataSource={dataSource}
                    columns={this.columns}
                     rowKey={'_id'}
                  />
                 <Pagination simple current={page} total={total} pageSize={pageSize} hideOnSinglePage={true}
                     onChange={this.pageChang}
                 />

              </Card>
                <Button type="primary" onClick={
                    this.getDoodlist.bind(this,page,pageSize)
                }>全部</Button>
                <Select labelInValue={true}
                        defaultValue={{key: '0'}}
                        style={{width: 153}}
                        onChange={(e)=>{
                            this.$axios.post('/hehe/food/getInfoByType',{typeid:e.key})
                            .then((data)=>{
                                this.setState({dataSource:data.list,total:1})
                            })
                         }
                        }>
                    <Option value="0" onClick={
                    this.getDoodlist.bind(this,page,pageSize)
                    }>种类选择</Option>
                    <Option value="1">种类一</Option>
                    <Option value="2">种类二</Option>
                    <Option value="3">种类三</Option>
                    <Option value="4">种类四</Option>
                    <Option value="5">种类五</Option>
                    <Option value="6">种类六</Option>
                    <Option value="7">种类七</Option>             
                </Select>
                {isShow&&<UpData upData={upData} isShow={this.isShow} submit={this.submit}></UpData>}
            </div>
        )
    }
}
export default Rootlist;