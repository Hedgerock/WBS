export const MenuEl = (props) => {
    const { data = [] } = props

    return (
        data.map(el => (
            <li className="menu-element" key={ el.id }>
                <a href={ el.link } className="menu-element__link">{ el.title }</a>
            </li>
            )
        ) 
    )
}