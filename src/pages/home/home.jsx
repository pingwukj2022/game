import "./home.css";
// import viteLogo from "/vite.svg";
import { Avatar, Input, Badge } from "antd";
import {
  SmileFilled,
  SignalFilled,
  SettingFilled,
  MessageFilled,
  FolderFilled,
  ContactsFilled,
  FormOutlined,
  PoweroffOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Search } = Input;
const onSearch = (value) => console.log(value);
// const url = viteLogo;
function Home() {
  return (
    <>
      <div className="home_a">
        <div className="bottom">
          <div className="bottom_avatar">
            <Avatar
              shape="square"
              size="large"
              className="avatar_left"
              icon={<UserOutlined />}
            />
            <div className="avatar_right">
              <h3 className="u_name">admin</h3>
              <span className="q_tips">
                点击编辑资料
                <FormOutlined className="right_icon" />
              </span>
            </div>
          </div>
          <ul className="bottom_label">
            <li className="gailan moren">
              <SmileFilled />
              <span className="tt">概览</span>
            </li>
            <li className="moren">
              <SignalFilled />
              <span className="tt">数据</span>
            </li>
            <li className="moren">
              <ContactsFilled />
              <span className="tt">用户</span>
            </li>
            <li className="moren">
              <FolderFilled />
              <span className="tt">资料</span>
            </li>
            <li className="moren">
              <MessageFilled />
              <span className="tt">信息</span>
            </li>
            <li className="moren">
              <SettingFilled />
              <span className="tt">设置</span>
            </li>
          </ul>
          <div className="bottom_right">
            <PoweroffOutlined />
            <span className="tc_text">退出</span>
          </div>
        </div>
        <div className="top">
          <h2 className="top_left">
            <span className="welcome">welcome</span>
            <span className="g">Gaem</span>管理后台
            <a href="#">
              <Badge count={6} size="small">
                <Avatar shape="square" size="small" />
              </Badge>
            </a>
          </h2>
          <Search
            className="search"
            placeholder="请输入您需要搜索的内容"
            onSearch={onSearch}
            enterButton
          />
        </div>
      </div>
    </>
  );
}
export default Home;
