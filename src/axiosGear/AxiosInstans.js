import axios from 'axios';
function setupAxios(axios) {
    axios.defaults.withCredentials = true;
    axios.interceptors.response.use(undefined);
}
let axiosInstance;
/**
 * Получить сконфигурированный экземпляр axios'а.
 */
export const getPreparedAxiosInstance = () => {
    if (axiosInstance == null) {
        axiosInstance = axios;
        setupAxios(axiosInstance);
    }
    return axiosInstance;
}