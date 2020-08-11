
import React, { Component } from 'react'
import styles from './IndexPage.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';
class IndexPage extends Component {
  constructor() {
    super()
  }
  // 打开饼图
  openPie = () => {
    window.open('http://localhost:8000/#/Pie');
  }
  // 打开柱状图
  openBar = () => {
    window.open('http://localhost:8000/#/Bar');
  }
  // 打开折线图
  openLine = () => {
    window.open('http://localhost:8000/#/Line');
  }
  // 打开雷达图
  openRadar = () => {
    window.open('http://localhost:8000/#/Radar');
  }
  render() {

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>欢迎来到echarts小课堂</h2>
        <div className={styles.btn}>
          <Button onClick={this.openPie}>饼图</Button>
          <Button onClick={this.openBar}>柱状图</Button>
          <Button onClick={this.openLine}>折线图</Button>
          <Button onClick={this.openRadar}>雷达图</Button>
        </div>
      </div>
    )
  }
}



export default IndexPage