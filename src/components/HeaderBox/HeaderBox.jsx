import { ContactUs } from "../ContactUs"
import { Logo } from "../Logo"
import { Menu } from "../Menu"
import './HeaderBox.css'

export const HeaderBox = (props) => {
    const { className } = props
    let newClassName
    if (className) {
        newClassName = `header-box header-box_${className}`
    }

    return (
        <div className={ newClassName || `header-box` }>
            <div className="header-box-container">
                <Logo />
                <Menu />
                <ContactUs />
            </div>
        </div>
    )
}