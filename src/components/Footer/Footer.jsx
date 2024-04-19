import { Logo } from '../Logo'
import './Footer.css'

export const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-box">
                <Logo />
                <span className='footer-box__rights'>© 2024 WBS Shipbrokers. All rights reserved.</span>
            </div>
        </div>
    )
}