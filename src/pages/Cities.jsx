import React, {useCallback, useEffect, useState} from "react";
import {useCityApi} from "../api/useCityApi";
import {Link} from "react-router-dom";

const Cities = () => {
    const api = useCityApi();
    const [cities, setCities] = useState(null);

    useEffect(() => {
        fetchCities().then();
    }, []);

    const fetchCities = useCallback(async () => {
        try {
            const res = await api.getCities();
            setCities(res);
        } catch (e) {
            console.log(e);
        }
    }, []);

    return <div className={"flex flex-col h-screen my-auto items-center"}>
        <div className={"flex text-2xl pb-4"}>Cities</div>
        <ul className={"text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg"}>
            {
                cities ? cities.map((item) => {
                    return <li
                        className="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg">
                        <Link to={`view/${item.name.official}`}
                              className={'w-full py-4 border-b border-gray-200'}>
                            <div>{item.name.common}</div>
                            <div>{item.flag}</div>
                        </Link>
                    </li>
                }) : <div>Что-то пошло не так.</div>
            }
        </ul>
    </div>
}
export default Cities;