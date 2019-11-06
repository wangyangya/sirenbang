import React from 'react'
import {Card,message,Select} from 'antd'
//import Rootlist from "../rootlist/rootlist";

const { Option } = Select;
class Addfood extends React.Component{
    constructor(){
        super()
        this.state={
            name:'',
            price:'',
            desc:'',
            typename:'',//菜类
            typeid:'',//菜类id
            img:''
        }
    }
    // handleChange(value) {
    //     console.log(value); // { key: "lucy", label: "Lucy (101)" }
    // }
    submit=()=>{
        let img=this.refs.file.files[0]
        //创建filereader对象
        let File=new FileReader()
        File.onload=()=>{
            console.log(File.result)
            this.setState({img:File.result})
        }
        //读取图片
        File.readAsDataURL(img)
       console.log(img)
    }
    render(){
        let {name,price,desc,typename,typeid}=this.state
        return(
            <div>
                <Card title='添加新品'>
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
                    <label >选择类别：</label>
                    {/*<input type="text" value={desc} onChange={(e)=>{*/}
                    {/*this.setState({desc:e.target.value})*/}
                    {/*}}/>*/}
                    <Select
                        labelInValue
                        defaultValue={{ key: '0' }}
                        style={{ width: 120 }}
                        // onChange={handleChange}
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
                    <input type="file" ref='file'/>
                    <img src={this.state.img}/>
                    <br/>
                    <button onClick={this.submit}>添加</button>
                </Card>
            </div>
        )
    }
    }


export default Addfood