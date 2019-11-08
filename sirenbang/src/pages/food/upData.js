import React from 'react'
import {Card,message,Select} from 'antd'
import Style from './index.module.less'
const { Option } = Select;
class upData extends React.Component{
    constructor(props){
        super(props)
         this.state=props.upData
    }
    render(){
          let {name,price,desc,typename,typeid,img,_id}=this.state
        return(
            <div className={Style.UpData}>
                <Card title='修改商品信息'>
                    <label >新品名称：</label>
                    <input type="text" value={name} onChange={(e)=>{
                        this.setState({name:e.target.value})
                    }}/>
                    <br/>
                    <label >新品价格：</label>
                    <input type="text" value={price} onChange={(e)=>{
                        this.setState({price:e.target.value})
                    }}/>
                    <br/>
                    <label >新品描述：</label>
                    <input type="text" value={desc} onChange={(e)=>{
                        this.setState({desc:e.target.value})
                    }}/>
                    <br/>
                    <label >新品类别：</label>
                    <input type="text" value={typename} onChange={(e)=>{
                        this.setState({typename:e.target.value})
                    }}/>
                    <br/>
                    <label >选择种类：</label>
                   
                    <Select
                        labelInValue
                        defaultValue={{ key: String(typeid) }}
                        style={{ width: 120 }}
                        onChange={(e)=>{
                            this.setState({typeid:e.key})
                        }}
                    >
                        <Option value="0">全部</Option>
                        <Option value="1">种类一</Option>
                        <Option value="2">种类二</Option>
                        <Option value="3">种类三</Option>
                        <Option value="4">种类四</Option>
                        <Option value="5">种类五</Option>
                        <Option value="6">种类六</Option>
                        <Option value="7">种类七</Option>
                    </Select>
                    <br/>
                    <label >上传图片：</label>
                    <input type="file" ref='file' onChange={(e)=>{
                            let file =this.refs.file.files[0]
                            var File = new FileReader();//本地预览
                            File.onload =()=>{
                              this.setState({img:File.result})
                            }
                            File.readAsDataURL(file);//
                    }

                    }/><br/>
                    <img src={img} style={{width:50,height:50}}/>
                    <br/>
                     <button onClick={()=>{
                         this.props.submit(name,price,desc,typename,typeid,img,_id)}}
                         >修改</button>
                     <button onClick={()=>{
                         this.props.isShow(false)
                     }
                     }>放弃</button>
                </Card> 
            </div>
        )
    }
    }


export default upData