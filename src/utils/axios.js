import axios from 'axios'

const request = axios.create({
  // 打包发版时需要是正确的服务器地址
  baseURL: 'http://114.132.122.125:9001/api'
});

export default request;
