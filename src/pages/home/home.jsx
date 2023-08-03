import "./home.css";
// import viteLogo from "/vite.svg";
import clsx from "clsx";
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
import { useState } from "react";
const { Search } = Input;

const MENU = [
  { icon: <SmileFilled />, name: "概览" },
  { icon: <SignalFilled />, name: "数据" },
  { icon: <ContactsFilled />, name: "用户" },
  { icon: <FolderFilled />, name: "资料" },
  { icon: <MessageFilled />, name: "信息" },
  { icon: <SettingFilled />, name: "设置" },
];

const onSearch = (value) => console.log(value);
// const url = viteLogo;
function Home() {
  const [activeName, setActiveName] = useState("概览");
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
            {MENU.map((item) => {
              return (
                <li
                  key={item.name}
                  className={clsx("moren", {
                    gaoliang: activeName === item.name,
                  })}
                  onClick={() => {
                    setActiveName(item.name);
                  }}
                >
                  {item.icon}
                  <span className="tt">{item.name}</span>
                </li>
              );
            })}
          </ul>
          <div className="bottom_right">
            <PoweroffOutlined />
            <span className="tc_text">退出</span>
          </div>
        </div>
        <div className="top">
          <h2 className="top_left">
            <span className="welcome">welcome</span>
            <span className="g">Game</span>管理后台
          </h2>
          <a href="#">
            <Badge count={6} size="small">
              <Avatar shape="square" size="small" />
            </Badge>
          </a>
          <Search
            className="search"
            placeholder="请输入您需要搜索的内容"
            onSearch={onSearch}
            enterButton
          />
        </div>
        <div className="middle"></div>
        <div className="data">
          <ul className="data_conter">
            <li>
              <h1>173746849394</h1>
              <p>今日数据</p>
            </li>
            <li>
              <h1>173746849394</h1>
              <p>今日数据</p>
            </li>
            <li>
              <h1>173746849394</h1>
              <p>今日数据</p>
            </li>
            <li>
              <h1>173746849394</h1>
              <p>今日数据</p>
            </li>
            <li>
              <h1>173746849394</h1>
              <p>今日数据</p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Home;
