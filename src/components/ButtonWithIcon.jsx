import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const ButtonWithIcon = ({icon, onClick}) => {
    return (
        <button className={'inline-flex items-center rounded-lg px-3 py-1 text-xs font-medium bg-transparent border border-gray-200 hover:bg-gray-300 focus:z-10 focus:ring-2 focus:ring-gray-300 focus:bg-gray-300'}
                onClick={onClick}>
            <FontAwesomeIcon icon={icon} className="w-3 h-3 fill-current"/>
        </button>
    );
};