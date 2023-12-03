import type {
  AxiosError,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import axios from "axios";

const BASE_PREFIX = import.meta.env.VITE_API_URL;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_PREFIX,
  timeout: 1000 * 30,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    config.params = {
      api_key: import.meta.env.VITE_API_KEY,
      ...config.params,
    };
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) console.debug("response", response.data);
    return response;
  },
  (error: AxiosError) => {
    const { response } = error;
    if (response) {
      return Promise.reject(response.data);
    }
    console.error(
      "The network connection is abnormal, please try again later!"
    );
    return Promise.reject(error);
  }
);
const api = {
  get: (url: string, config = {}) => axiosInstance.get(url, config),
};

export default api;
