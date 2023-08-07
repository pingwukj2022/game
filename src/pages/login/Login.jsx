import "./login.css";
import Perfect from "/perfect.svg";
import { Button, Form, Input } from "antd";
import axios from "../../utils/axios";
import { message, Typography } from "antd";
import { useState } from "react";

function Login() {
  const [form] = Form.useForm();
  const [codeToken, setCodeTokenn] = useState();

  // 验证码发送成功通知
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: "success",
      content: "验证码发送成功",
    });
  };
  const success_b = () => {
    messageApi.open({
      type: "success",
      content: "Token获取成功",
    });
  };

  const [toke, setToken] = useState();
  const onFinish = (values) => {
    // console.log("点击了登录按钮:", values);
    axios
      .post("/login/submit_sms", {
        phone: values.phone,
        code: values.check,
        requestId: codeToken,
      })
      .then((e) => {
        // 200 是后端定义的成功的状态码，非 200 则可能是其他业务上的一些错误/其它特殊定义
        if (e.data.code === 200) {
          // 登录成功后做些什么
          // console.log("打印", e);
          success_b()
          setToken(e.data.data.token);
        } else {
          // 后面的错误提示是后端没有返回 msg 时会展示的。
          message.error(e.data.msg || "获取失败");
        }
      })
      .catch((err) => {
        // 请求遇到错误，可能是后端给的错误提示或者网络原因或者上面的 "请求完成" 的函数里面报错了
        console.log("错误信息：", err);

        // 弹出提示消息
        message.error("获取失败");
      });
  };

  // 获取验证码按钮事件
  const eml = async () => {
    // 获取验证码之前先校验手机号
    await form.validateFields(["phone"]);

    // 发送请求
    axios
      .post("/login/send_sms", {
        phone: form.getFieldValue("phone"),
      })
      .then((e) => {
        // 200 是后端定义的成功的状态码，非 200 则可能是其他业务上的一些错误/其它特殊定义
        if (e.data.code === 200) {
          // 发送成功, 保存 requestID
          success();
          setCodeTokenn(e.data.requestID);
        } else {
          // 后面的错误提示是后端没有返回 msg 时会展示的。
          message.error(e.data.msg || "获取验证码失败");
        }
      })
      .catch((err) => {
        // 请求遇到错误，可能是后端给的错误提示或者网络原因或者上面的 "请求完成" 的函数里面报错了
        console.log("错误信息：", err);

        // 弹出提示消息
        message.error("获取验证码失败");
      });
  };

  return (
    <>
      {contextHolder}
      <div className="main">
        <div className="title">
          <a href="###" target="" rel="noreferrer">
            <img src={Perfect} className="logo" alt="Perfect logo" />
          </a>
          <h1 className="name_h">获取万达 Token</h1>
        </div>

        <Form
          className="form"
          form={form}
          layout="vertical"
          onFinish={onFinish}
        >
          <Form.Item
            label="手机号"
            name="phone"
            rules={[
              {
                required: true,
                message: "手机号不能为空",
              },
            ]}
          >
            <Input
              className="input"
              size="large"
              placeholder="请输入账手机号"
            />
          </Form.Item>
          {/* <Form.Item
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
          </Form.Item> */}
          <Form.Item
            label="验证码"
            name="check"
            rules={[
              {
                required: true,
                message: "验证码不能为空",
              },
            ]}
          >
            <div className="check">
              <Input
                maxLength="6"
                className="input"
                size="large"
                placeholder="请输入验证码"
              />
              <Button
                onClick={eml}
                className="hqyzm"
                type="primary"
                size="large"
              >
                获取验证码
              </Button>
            </div>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              获取
              {/* <ForwardOutlined /> */}
            </Button>
          </Form.Item>
        </Form>
        {toke && (
          <Typography.Paragraph copyable className="copy">
           {toke} 
          </Typography.Paragraph>
        )}
      </div>
    </>
  );
}

export default Login;
