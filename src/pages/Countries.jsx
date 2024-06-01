import React, {useCallback, useEffect, useState} from "react";
import {useCountryApi} from "../api/useCountryApi";
import {Link} from "react-router-dom";

const Countries = () => {
    const api = useCountryApi();
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        fetchCountries().then();
    }, []);

    const fetchCountries = useCallback(async () => {
        try {
            const res = await api.getCountries();
            setCountries(res);
        } catch (e) {
            console.log(e);
        }
    }, []);

    return <div className={"flex flex-col h-screen my-auto items-center"}>
        <div className={"flex text-2xl pb-4"}>Countries</div>
        <ul className={"text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg"}>
            {
                countries ? countries.map((item) => {
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
export default Countries;