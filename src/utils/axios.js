import axios from 'axios'

const request = axios.create({
  // 打包发版时需要是正确的服务器地址
  baseURL: 'http://wanda.x7s.com/api'
});

export default request;
