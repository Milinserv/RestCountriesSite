import {useNavigate, useParams} from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";
import {useCityApi} from "../api/useCityApi";
import {Preloader} from "../components/Preloader";
import {ButtonWithIcon} from "../components/ButtonWithIcon";
import {faArrowLeftLong} from '@fortawesome/free-solid-svg-icons';

const ViewCity = () => {
    const {name} = useParams();
    const api = useCityApi();
    const [city, setCity] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCity(name).then();
    }, []);

    const fetchCity = useCallback(async (name) => {
        try {
            const res = await api.getCity(name);
            setCity(res[0]);
        } catch (e) {
            console.log(e);
        }
    }, []);

    return <div className={'w-full max-w-lg px-10 py-8'}>
        <div className={"max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow"}>
            {
                city ?
                    <div className={'grid'}>
                        <div>City name: {city.name.common}</div>
                        <div>Flag: {city.flag}</div>
                        <div>Capitol: {city.capital}</div>
                        <div>Timezone: {city.timezones}</div>
                    </div>
                    : <Preloader/>
            }
        </div>
        <div className={"pt-2"}>
            <ButtonWithIcon onClick={() => navigate('/')} icon={faArrowLeftLong} />
        </div>
    </div>
}
export default ViewCity;