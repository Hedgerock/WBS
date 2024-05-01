import { Link } from 'react-router-dom'
import { Logo } from '../Logo'
import './Footer.css'

export const Footer = () => {

    return (
        <div className="footer">
            <div className="footer-box">
                <div className="footer-top">
                    <Logo />
                    <Link className='terms-and-conditions' to = '/WBS/terms-and-conditions'>Terms and conditions</Link>
                </div>
                <span className='footer-box__rights'>© 2024 WBS Shipbrokers. All rights reserved.</span>
            </div>
        </div>
    )
}