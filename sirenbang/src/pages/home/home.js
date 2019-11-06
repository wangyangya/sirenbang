import React from 'react'
import { Card,Carousel } from 'antd';
// import Style from './home.module.less'
import Echart from '../../components/echarts/echarts'

// const image=[
//     {type:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573023090991&di=a8d009a522692662d6743bffcea624d8&imgtype=0&src=http%3A%2F%2Fqiniuimg.qingmang.mobi%2Fimage%2Forion%2F115394cc8807280eb6894402bd40c7c6_800_400.jpeg'},
//     {type:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573022898726&di=5ff95019ad2b266532d03c04504e881a&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161124%2Fc3f560c6577e4d74b006aa394959908e_th.jpg'},
//     {type:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573022898723&di=be1c8c462f3cd2e38cf6f5fc480be765&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20171220%2F07268c2f29b34cedad2190c10640d6c5.jpeg'},
//     {type:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573023137166&di=db05db516c8ec3679432d0c5dfb907d2&imgtype=0&src=http%3A%2F%2Fm.tuniucdn.com%2Ffb2%2Ft1%2FG1%2FM00%2FDC%2F69%2FCii9EVdEF7-IJ8e8AABYJh9XwXUAAGJvwMjjbYAAFg-503_w800_h400_c1_t0.jpg'},
//
// ];
class Home extends React.Component{
  render(){
    return(
        <Card title="咖啡厅管理系统" bordered={false} headStyle={{fontSize:40,textAlign:'left',color:'pink'}}>
        {/*<Carousel autoplay className={Style.momo}>*/}
            {/*{image.map((item,index)=>{*/}
               {/*return <div>*/}
                 {/*<img src={item.type}/>*/}
                {/*</div>*/}
            {/*})}*/}
        {/*</Carousel>*/}
        <p style={{fontSize:30,textAlign:'left'}}>年度销售额度情况</p>
            <Echart></Echart>
        </Card>

    )
  }
}
export default Home