
import React, { Component } from 'react'
import styles from './IndexPage.css';

class IndexPage extends Component {
  constructor() {
    super()
    this.state = {
      x: '10'
    }
  }
  render() {
    return (
      <div className={styles.container}>

        <h2 className={styles.title}>欢迎来到echarts小课堂</h2>

      </div>
    )
  }
}

export default IndexPage

