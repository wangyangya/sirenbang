import React from 'react'

class SetLink extends React.Component{


    componentDidMount() {
        let echarts = require('echarts')
        let myset = echarts.init(document.getElementById('nav'));

        myset.setOption({
            color: ['#3398DB'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    type: 'line'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [10, 52, 200, 334, 390, 330, 220,10,10,10,10,10]
                }
            ]
        })
    }
    render(){
        return(
            <div id="nav" style={{width:800,height:500}}></div>
        )
    }
}
export default SetLink