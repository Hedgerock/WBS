import { headerMenu } from "./data/headerMenu"
import './Menu.css'
import { MenuEl } from "./MenuEl"

export const Menu = () => {
    
    return (
        <ul className="menu">
            <MenuEl data = { headerMenu } />
        </ul>
    )
}