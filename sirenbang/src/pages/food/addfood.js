import React from 'react'
import {Card,message,Select} from 'antd'
//import Rootlist from "../rootlist/rootlist";

const { Option } = Select;
class Addfood extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            price:'',
            desc:'',
            typename:'',//菜类
            typeid:'',//菜类id
            img:''
        }
    }
    handleChange=(value)=>{
        this.state.typename=value.label
    };
    submit=()=>{
        if(!this.refs.file.files[0]){
            return
        }
        let aaa=this.refs.file.files[0];
        //创建filereader对象
        let File=new FileReader();
        File.onload=()=>{
            this.setState({img:File.result});
            let {name,price,desc,typename,typeid,img}=this.state;
            if(!name&&!price&&!desc&&!typename&&!typeid&&!img) return;
            this.$axios.post('/hehe/food/add',{name,price,desc,typeid,typename,img})
                .then((data)=>{

                    //console.log(data)
                    //console.log(this.state)
                    if(data.err==0){
                        message.success('添加成功')
                    }else{
                        message.error('添加失败，请重新添加！')
                    }

                })
        };

        File.readAsDataURL(aaa)
        //读取图片
        //console.log(img)
    };
    render() {
        let {name, price, desc, typename, typeid, img} = this.state;
        return (
            <div>
                <Card title='添加新品'>
                    <label>新品名称：</label>
                    <input type="text" value={name} onChange={(e) => {

                        this.setState({name: e.target.value});
                        this.setState({name: e.target.value})
                    }}/>
                    <br/>
                    <label>新品价格：</label>
                    <input type="text" value={price} onChange={(e) => {
                        this.setState({price: e.target.value})
                    }}/>
                    <br/>
                    <label>新品描述：</label>
                    <textarea type="text" value={desc} style={{width: 153}} onChange={(e) => {

                        this.setState({desc: e.target.value})
                    }}/>
                    <br/>
                    <label>选择类别：</label>
                    <Select
                        labelInValue={true}
                        defaultValue={{key: '0'}}
                        style={{width: 153}}
                        onChange={this.handleChange}
                        //value={{key: '5'}}

                        // onChange={(e)=>{
                        //     this.setState({typename:e.target.value})}}
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
                    <label>类别id：</label>
                    <input type="text" value={typeid} onChange={(e) => {
                        this.setState({typeid: e.target.value})
                    }}/>
                    <br/>
                    <label>上传图片：</label>
                    <input type="file" ref='file'/>
                    <img src={this.state.img} width='50px' height='50px'/>
                    <br/>
                    <button onClick={this.submit}>添加</button>
                </Card>
            </div>
        )
    }
}
export default Addfood
