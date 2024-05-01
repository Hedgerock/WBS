import { Link } from "react-router-dom"

export const MenuEl = (props) => {
    const { data = [] } = props

    const url = window.location.href.split('/').filter(item => item);
    const checkUrl = '/' + url.slice(2).join('/');

    return (
        data.map(el => (
            <li className="menu-element" key={ el.id }>
                <Link to ={ el.link } className={ `menu-element__link ${ checkUrl === el.link ? 'link-active' : '' }` }>{ el.title }</Link>
            </li>
            )
        ) 
    )
}