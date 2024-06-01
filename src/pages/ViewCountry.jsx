import {useNavigate, useParams} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";
import {useCountryApi} from "../api/useCountryApi";
import {Preloader} from "../components/Preloader";
import {ButtonWithIcon} from "../components/ButtonWithIcon";
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';

const ViewCountry = () => {
    const {name} = useParams();
    const api = useCountryApi();
    const [country, setCountry] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCountry(name).then();
    }, []);

    const fetchCountry = useCallback(async (name) => {
        try {
            const res = await api.getCountry(name);
            setCountry(res[0]);
        } catch (e) {
            console.log(e);
        }
    }, []);

    return <div className={'w-full max-w-lg px-10 py-8'}>
        <div className={"max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow"}>
            {
                country ?
                    <div className={'grid'}>
                        <div>Country name: {country.name.common}</div>
                        <div>Flag: {country.flag}</div>
                        <div>Capitol: {country.capital}</div>
                        <div>Timezone: {country.timezones}</div>
                    </div>
                    : <Preloader/>
            }
        </div>
        <div className={"pt-2"}>
            <ButtonWithIcon onClick={() => navigate('/')} icon={faArrowLeftLong} />
        </div>
    </div>
}
export default ViewCountry;