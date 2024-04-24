import { Link } from 'react-router-dom'
import './ContactUs.css'

export const ContactUs = (props) => {
    const { className, text, link } = props

    return (
        <Link to = { link || '/WBS/contact-us' } className = { `contact-us ${className ? className : ''}` }>
            <span className='contact-us__text'>{ text || 'Contact us' }</span>
            <i className='contact-us__icon'></i>
        </Link>
    )
}