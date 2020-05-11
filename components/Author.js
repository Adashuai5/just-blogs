import { Avatar, Divider } from 'antd'
import { GithubOutlined, WechatOutlined, TwitterOutlined } from "@ant-design/icons";
import '../public/style/components/author.css'

const Author = () => {

  return (
    <div className="author-div common-box">
      <div> <Avatar size={100} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" /></div>
      <div className="author-introduction">
        专注于WEB和移动前端开发。
                <Divider>社交账号</Divider>
        <Avatar size={28} icon={<GithubOutlined />} className="account" />
        <Avatar size={28} icon={<WechatOutlined />} className="account" />
        <Avatar size={28} icon={<TwitterOutlined />} className="account" />
      </div>
    </div>
  )

}

export default Author