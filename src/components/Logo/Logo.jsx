import { Link } from 'react-router-dom'
import './Logo.css'

export const Logo = () => {

    return (
        <Link to ='/WBS' className="logo">WBS <span>Worldwide shipbrocker</span></Link>
    )
}