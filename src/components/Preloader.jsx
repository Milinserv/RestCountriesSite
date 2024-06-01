import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleNotch} from '@fortawesome/free-solid-svg-icons';

export const Preloader = () => {
    return (
        <div className={'flex justify-center items-center h-full'}>
            <div className={'flex flex-col'}>
                <FontAwesomeIcon icon={faCircleNotch} size={'5x'} spin/>
            </div>
        </div>
    );
}