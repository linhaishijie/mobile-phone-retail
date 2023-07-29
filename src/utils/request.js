//果然如我所料配置的是通用部分
import axios from "axios"
import router from "@/router"; // 获取路由

export const http = axios.create({
    baseURL: '/api',
    timeout: 10000,
})

// 请求拦截器
http.interceptors.request.use(
    (config) => {
        if (config.url !== "/sys/login") {   // 判断请求是否是登录接口
            config.headers.token = sessionStorage.getItem("token"); // 如果不是登录接口，就给请求头里面设置token
        }
        return config; // 返回这个配置对象，如果没有返回，这个请求就不会发送出去
    },
    (error) => {
        return Promise.reject(error);
    }
)

// 响应拦截器
http.interceptors.response.use(
    (res) => {
        let code = res.data.code  // 获取后端返回的状态码
        if (code === 200) {           // 成功
            return res.data.data  // 返回里面的数据，在使用这个axios时，获取到的东西就是这里返回的东西
        } else if (code == 401) {  // token失效
            router.push("/login");  // 跳转登录页
        } else {
            return res.data
        }
    },
    (error) => {
        return Promise.reject(error);
    }
)