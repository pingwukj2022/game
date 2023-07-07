import "./login.css";
import viteLogo from "/vite.svg";
import { Button, Form, Input } from "antd";
// import { ForwardOutlined } from "@ant-design/icons";

function Login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <>
      <div className="title">
        <a href="###" target="" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>{" "}
        <h1>Game管理后台系统</h1>
        <Form className="form" layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: "账号不能为空",
              },
            ]}
          >
            <Input
              className="input"
              size="large"
              placeholder="请输入账号或手机号"
            />
          </Form.Item>
          <Form.Item
            label="密码"
            name="password"
            rules={[
              {
                required: true,
                message: "密码不能为空",
              },
            ]}
          >
            <Input.Password
              className="input"
              size="large"
              placeholder="请输入密码"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              登录
              {/* <ForwardOutlined /> */}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
}

export default Login;
