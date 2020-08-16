import React, { Component } from 'react'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';

// 折线图

class Line extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    // 获取图表配置
    getOption = () => {
        return {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        color: 'rgba(12, 144, 255, 1)'
                    }
                }
            },
            grid: {
                left: '3%',
                right: '7%',
                bottom: '5%',
                top: '25%',
                borderWidth: 1,
                containLabel: true
            },
            xAxis: {
                axisLabel: {
                    textStyle: {
                        color: '#000',  //更改横坐标轴文字颜色
                        fontSize: 14     //更改坐标轴文字大小
                    },
                    margin: 10
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(38,49,51,0.8)',
                        width: 1
                    }
                },
                axisTick: {
                    show: true,
                    interval: 'auto'
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#666'
                    }
                },
                splitArea: { show: false },   //去除网格区域
                boundaryGap: false,
                type: 'category',
                data: ['08-11', '08-12', '08-13', '08-14', '08-15', '08-16', '08-17']
            },
            yAxis: {
                axisLabel: {
                    textStyle: {
                        color: '#000',  //更改纵坐标轴文字颜色
                        fontSize: 14     //更改坐标轴文字大小
                    }
                    // margin: 20
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: 'rgba(38,49,51,0.8)'
                    }
                },
                axisTick: {
                    show: false

                },
                axisLine: {
                    show: false
                },
                splitArea: { show: false },
                type: 'value'

            },
            series: [{
                name: '人流量分析',
                data: [3350, 1600, 2500, 3300, 2100, 2200, 3000],
                type: 'line',
                smooth: true,
                showSymbol: false,
                hoverAnimation: true,
                areaStyle: {
                    color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(31, 180, 255, 1)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(31, 180, 255, 0)' // 100% 处的颜色
                        }],
                        global: false // 缺省为 false
                    },
                    opacity: 0.3
                },
                lineStyle: {
                    normal: {
                        width: 1,
                        color: 'rgba(31,180,255,1)'
                    }

                }
            }]
        }
    }

    render() {
        return (
            <div  style={{ height: '600px', padding: '20px' }}>
                <ReactEcharts
                    option={this.getOption()}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
        )
    }
}

export default Line
