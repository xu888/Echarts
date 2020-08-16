import React, { Component } from 'react'
// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
import ReactEcharts from 'echarts-for-react';

// 饼图
class Pie extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    // 获取图表配置
    getOption = () => {
        return {
            // 标题设置区域
            title: {
                //显示策略，默认值true,可选为：true（显示） | false（隐藏）
                show: true,
                //主标题
                text: '某站点用户访问来源',
                //副标题 \n用于换行
                subtext: '模拟\n数据',
                //主标题超链接
                link: 'http://www.baidu.com',
                //副标题的超链接打开方式
                target: 'blank',
                //副标题超链接
                sublink: 'http://www.baidu.com',
                //副标题超链接打开方式
                subtarget: 'blank',
                // 水平安放位置，默认为左对齐，可选为： 'left'  ¦ 'center' ¦ 'right'
                // ¦ {number}（x坐标，单位px） 相对于左上角的位置，类似于定位
                x: 'center', //默认为左上角对齐，横向向右为x坐标，纵向向下为y坐标
                // 垂直安放位置，默认为全图顶端，可选为：'top' ¦ 'bottom' ¦ 'center'  设置为bottom时副标题看不到了
                // ¦ {number}（y坐标，单位px）
                y: 'top',
                // 标题背景颜色  包含主副标题
                backgroundColor: 'rgba(0,0,0,0)',
                // 标题边框颜色 包含主副标题
                borderColor: '#ccc',
                // 标题边框线宽，单位px，默认为0（无边框）包含主副标题     
                borderWidth: 0,
                // 标题内边距，单位px，默认各方向内边距为5 可以像css文件中写成[5,10,15,20]上右下左      
                padding: 10,
                //主标题文本样式设置
                textStyle: {
                    fontSize: 26,
                    fontWeight: 'bolder',
                    color: '#000',
                },
                // 副标题文本样式设置
                subtextStyle: {
                    fontSize: 18,
                    color: '#000'
                },
                // 主副标题纵向间隔，单位px，默认为10，
                itemGap: 20,
                /*
                一级层叠控制。默认0,每一个不同的zlevel将产生一个独立的canvas，
                相同zlevel的组件或图标将在同一个canvas上渲染。zlevel越高越靠顶层，
                canvas对象增多会消耗更多的内存和性能，并不建议设置过多的zlevel，
                大部分情况可以通过二级层叠控制z实现层叠控制。
                */
                zlevel: 0,
                //二级层叠控制，默认6,同一个canvas（相同zlevel）上z越高约靠顶层。
                z: 6,
            },
            // 提示框
            tooltip: {
                // trigger 设置触发类型，默认数据触发，可选值：'item' ¦ 'axis'
                trigger: 'item',
                // formatter设置提示框显示内容
                // {a}指series.name  {b}指series.data的name
                // {c}指series.data的value  {d}%指这一部分占总数的百分比
                formatter: '{a} <br/>{b} : {c} ({d}%)',
                // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
                showDelay: 20,
                // 隐藏延迟，单位ms
                hideDelay: 20,
            },
            // 图例设置
            legend: {
                // orient 设置布局方式，默认水平布局，可选值：'horizontal'（水平） ¦ 'vertical'（垂直）
                orient: 'vertical',
                left: 'right',
                // 设置图例图形的宽
                itemWidth: 24,
                // 设置图例图形的高
                itemHeight: 18,
                data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
            },
            // 值域设置
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    // 设置环形饼状图，可以设置两个参数， 第一个百分数设置内圈大小，第二个百分数设置外圈大小
                    radius: '55%',
                    // 设置饼状图位置，第一个百分数调水平位置，第二个百分数调垂直位置
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 234, name: '联盟广告' },
                        { value: 135, name: '视频广告' },
                        { value: 1548, name: '搜索引擎' }
                    ],
                    // emphasis：设置鼠标放到哪一块扇形上面的时候，扇形样式、阴影
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 1)'
                        }
                    },
                    // 设置值域的标签
                    label: {
                        normal: {
                            // 设置标签位置，默认在饼状图外 可选值：'outer' ¦ 'inner（饼状图上）'
                            position: 'inner',  
                            // formatter: '{a} <br/> {b} : {c}个 ({d}%)'   设置标签显示内容 ，默认显示{b}
                            // {a}指series.name  {b}指series.data的name
                            // {c}指series.data的value  {d}%指这一部分占总数的百分比
                            formatter: '{b} : {c}'
                        }
                    }
                }
            ]
        }
    }

    render() {
        return (
            <div style={{ height: '500px', padding: '20px' }}>
                <ReactEcharts
                    option={this.getOption()}
                    style={{ width: '100%', height: '100%' }}
                />
            </div>
        )
    }
}

export default Pie
