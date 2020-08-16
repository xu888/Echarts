import React, { Component } from 'react'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';


// 柱状图
export class Bar extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    // 获取图表配置
    getOption = () => {
        return {
            title: {
                text: '世界人口总量',
                subtext: '数据来自网络',
                x: 'center'
            },
            tooltip: {
                // trigger 设置触发类型，默认数据触发，可选值：'item' ¦ 'axis'
                trigger: 'axis',
                // 指示器类型。 'line' | 'shadow' | 'none' | 'cross'
                axisPointer: {
                    type: 'shadow'
                }
            },
            // 图例
            legend: {
                data: ['2011年', '2012年'],
                x: 'right'

            },
            // 绘图网格 
            grid: {
                // 组件离容器的距离,可选值：'百分比'¦ {number}（单位px）
                left: '3%',
                right: '4%',
                bottom: '3%',
                // 区域是否包含坐标轴,默认false
                containLabel: true
            },
            //是否启用拖拽重计算特性，默认关闭(即值为false)  
            // calculable: true,
            xAxis: {
                show: true,
                /*
                坐标轴类型。 'value' 数值轴，适用于连续数据。
                'category' 类目轴，适用于离散的类目数据。
                'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化
                'log' 对数轴。适用于对数数据。
                */
                type: 'value',
                // x坐标轴名称。
                name: '人口数',
                // 名称显示位置，默认为end，可选 'start' | 'middle' | 'center' | 'end'
                nameLocation: 'end',
                // 坐标轴名称与轴线之间的距离
                nameGap: 20,
                // x坐标轴刻度标签的相关设置。
                axisLabel: {
                    textStyle: {
                        color: '#000',  //更改横坐标轴文字颜色
                        fontSize: 14     //更改坐标轴文字大小
                    },
                    // 刻度标签的内容格式器，支持字符串模板和回调函数两种形式
                    formatter: '{value} (万)',


                },
                /*
                坐标轴两边留白策略  非类目轴，分别表示数据最小值和最大值的延伸范围，
                可以直接设置数值或者相对的百分比，在设置 min 和 max 后无效              
                */
                boundaryGap: [0, 0.01],
                // 坐标轴刻度最小值 默认不设置会自动分配，保证坐标轴刻度的均匀分布
                // min:'0',
                // // 坐标轴刻度最大值
                // max:'900000'
            },
            yAxis: {
                type: 'category',
                data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口'],
                 //分隔区域，默认不显示  
                 splitArea: {show: true} 
            },
            // 类目轴（type: 'category'）中有效
            // data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            series: [
                {
                    name: '2011年',
                    type: 'bar',
                    data: [18203, 23489, 29034, 104970, 131744, 630230]
                },
                {
                    name: '2012年',
                    type: 'bar',
                    data: [19325, 23438, 31000, 121594, 134141, 681807]
                }
            ]
        }
    }
    render() {
        return (
            <div style={{ height: '800px', padding: '20px' }}>
                <ReactEcharts
                    option={this.getOption()}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
        )
    }
}

export default Bar
