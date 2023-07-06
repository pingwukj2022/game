import "./login.css";
import viteLogo from "/vite.svg";
import { Button, Input } from "antd";

function Login() {
  return (
    <>
      <div>
        <a href="###" target="" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Game管理后台系统</h1>
      <Input className="input" placeholder="请输入账号或手机号" />
      <Input className="input" placeholder="请输入密码" />

      <Button type="primary">登录</Button>
    </>
  );
}
export default Login;
