import React from "react";
import "../public/style/components/header.css";

import { Row, Col, Menu } from "antd";
import {
  HomeOutlined,
  UnorderedListOutlined,
  TagsOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
      <Col xs={24} sm={24} md={10} lg={10} xl={10}>
        <span className="header-logo">Ada</span>
        <span className="header-txt">专注前端开发。</span>
      </Col>

      <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
        <Menu mode="horizontal">
          <Menu.Item key="Home">
            <HomeOutlined />
            Home
          </Menu.Item>
          <Menu.Item key="posts">
            <UnorderedListOutlined />
            Posts
          </Menu.Item>
          <Menu.Item key="Tags">
            <TagsOutlined />
            Tags
          </Menu.Item>
          <Menu.Item key="Github">
            <GithubOutlined />
            Github
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  </div>
);

export default Header;
