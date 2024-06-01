import {useCallback} from "react";
import {useFetch} from "../axiosGear/useFetch";
import {Config} from "../config";
import Countries from "../pages/Countries";
import ViewCountry from "../pages/ViewCountry";

export function useCountryApi() {
    const axios = useFetch();

    const getCountry = useCallback( async (name) => {
        const result = await axios.get(Config.MAIN_API_URL + `/name/${name}?fullText=true`);
        return result.data;
    }, []);

    const getCountries = useCallback(async () => {
        const result = await axios.get(Config.MAIN_API_URL + `/all`);
        return result.data;
    }, []);

    return {
        getCountry,
        getCountries
    };
}