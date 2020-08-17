
import React, { Component } from 'react'
import styles from './IndexPage.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
class IndexPage extends Component {
  constructor() {
    super()
  }
  // 打开饼图
  _openPie = () => {
    window.open('http://localhost:8000/#/Pie');
  }
  // 打开柱状图
  _openBar = () => {
    window.open('http://localhost:8000/#/Bar');
  }
  // 打开折线图
  _openLine = () => {
    window.open('http://localhost:8000/#/Line');
  }
  // 打开雷达图
  _openRadar = () => {
    window.open('http://localhost:8000/#/Radar');
  }
  render() {

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>欢迎来到echarts小课堂</h2>
        <div className={styles.btn}>
          <Button onClick={this._openPie}>饼图</Button>
          <Button onClick={this._openBar}>柱状图</Button>
          <Button onClick={this._openLine}>折线图</Button>
          <Button onClick={this._openRadar}>雷达图</Button>
        </div>
      </div>
    )
  }
}



export default IndexPage