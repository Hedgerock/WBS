import { Link } from "react-router-dom";
import { ships } from "../../../ships";
import './Types.css';

export const Types = () => {

    const url = window.location.href.split('/').filter(item => item);
    const checkUrl = '/' + url.slice(2).join('/');

    return (
        <ul className="types">
            {
                ships.map((ship, index) => (
                    <li className="types-element" key={ index }>
                        <Link
                            className={ `types-element__link  ${ checkUrl === ship.link ? 'link-active' : '' }` } 
                            to = { ship.link }
                        >
                            { ship.title }
                        </Link>
                    </li>
                ))
            }
        </ul>
    )
}