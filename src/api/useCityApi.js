import {useCallback} from "react";
import {useFetch} from "../axiosGear/useFetch";
import {Config} from "../config";

export function useCityApi() {
    const axios = useFetch();

    const getCity = useCallback( async (name) => {
        const result = await axios.get(Config.MAIN_API_URL + `/name/${name}?fullText=true`);
        return result.data;
    }, []);

    const getCities = useCallback(async () => {
        const result = await axios.get(Config.MAIN_API_URL + `/all`);
        return result.data;
    }, []);

    return {
        getCity,
        getCities
    };
}