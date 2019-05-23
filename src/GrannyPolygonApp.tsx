import React, { Component } from 'react'
import { Layout } from 'antd'
const { Header, Content, Footer } = Layout

export default class GrannyPolygonApp extends Component {
  render() {
    return (
      <Layout>
        <Header className="bg-color-contrast">
          <h1>Granny Polygon</h1>
        </Header>
        <Content className="bg-color-muted">
          Play with different shapes and configurations for a blanket!
        </Content>
        <Footer className="bg-color-secondary">By Laura Eckman</Footer>
      </Layout>
    )
  }
}
