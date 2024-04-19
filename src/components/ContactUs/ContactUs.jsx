import './ContactUs.css'

export const ContactUs = (props) => {
    const { className, text, link } = props

    return (
        <a href = { link || '#' } className = { `contact-us ${className ? className : ''}` }>
            <span className='contact-us__text'>{ text || 'Contact us' }</span>
            <i className='contact-us__icon'></i>
        </a>
    )
}