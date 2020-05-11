import React, { useState } from 'react'
import Head from 'next/head'
import { Row, Col, List } from 'antd'
import { CalendarOutlined } from "@ant-design/icons";
import Header from '../components/Header'
import Author from '../components/Author'
import Footer from '../components/Footer'
import '../public/style/pages/index.css'



const Home = () => {

  const [mylist, setMylist] = useState(
    [
      { title: 'blog1', context: 'xxxxxxxxxxxxxxxxx' },
      { title: 'blog2', context: 'xxxxxxxxxxxxxxxxx' },
      { title: 'blog3', context: 'xxxxxxxxxxxxxxxxx' },
      { title: 'blog4', context: 'xxxxxxxxxxxxxxxxx' },
    ]
  )
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Row className="common-main" type="flex" justify="center">
        <Col className="common-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={item => (
                <List.Item>
                  <div className="list-title">{item.title}</div>
                  <div className="list-icon">
                    <span><CalendarOutlined /> 2019-06-28</span>
                  </div>
                  <div className="list-context">{item.context}</div>
                </List.Item>
              )}
            />
          </div>
        </Col>

        <Col className="common-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
        </Col>
      </Row>
      <Footer />
    </>
  )
}
export default Home