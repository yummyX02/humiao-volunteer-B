import axios from 'axios';
import { ElMessage } from 'element-plus';

const baseURL = 'http://api.yuleng.top:38088';

// 创建一个 Axios 实例
const axiosInstance = axios.create({
  baseURL,
  timeout: 5000, // 请求超时时间
  headers: {
    // 'Authorization':'',
    'token':'',
    'Content-Type': 'application/json',
  },
});

// 添加请求拦截器
axiosInstance.interceptors.request.use(
  (config) => {
    // 可以在这里添加认证信息、请求头等
    const token = localStorage.getItem('isLogin');
    if (token) {
      // config.headers.token = `Bearer ${token}`;
      config.headers.token = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
axiosInstance.interceptors.response.use(
  (response) => {
    // 处理响应数据，例如处理错误信息
    if (response.data.code == "A0221") {
      ElMessage('登录已过期，请重新登录')
      console.log("登录已过期，请重新登录");
    }
    return response.data;
  },
  (error) => {
    // 处理请求错误
    const { status } = error.response
    switch (status) {
      case 400:
        ElMessage('请求参数出错')
        break
      case 401:
        // token 无效 （无token， token无效， token 过期）
        ElMessage('token 无效')
        break
      case 403:
        ElMessage('没有权限，请联系管理员')
        break
      case 404:
        ElMessage('请求资源不存在')
        break

      default:
        ElMessage('服务端出现异常，请联系管理员')
        break
    }
    return Promise.reject(error);
  }
);

// 导出封装后的 Axios 实例
export default axiosInstance;