import {getPreparedAxiosInstance} from "./AxiosInstans";
import {useCallback} from "react";

const AxiosInstance = getPreparedAxiosInstance();

export function useFetch() {
    const applyRequiredHeaders = useCallback((headers= {}) => {
        return Object.assign(headers, {
            Accept: 'application/json',
        });
    }, []);

    const get = useCallback((url, config) => {
        return AxiosInstance.get(url, {...config, headers: applyRequiredHeaders(config?.headers ?? {})});
    }, []);

    const post = useCallback((url, data = {}, config) => {
        return AxiosInstance.post(url, data, {...config, headers: applyRequiredHeaders(config?.headers ?? {})});
    }, []);

    return {
        get,
        post
    }
}