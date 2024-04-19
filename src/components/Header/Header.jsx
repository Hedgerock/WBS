import { ContactUs } from '../ContactUs'
import { Logo } from '../Logo'
import './Header.css'
import { Menu } from './Menu'
import video from './assets/bg.mp4'
import { useAnimateComponent } from '../../hooks/useAnimateComponent'

export const Header = () => {
    const elementRef = useAnimateComponent('header-box-bg');

    return (
        <div className="header header-box-bg" ref={ elementRef }>
            <video 
                className='header__bg' 
                src={ video } 
                autoPlay 
                loop 
                muted
            >    
            </video>
            <div className="header-box">
                <div className="header-box-container">
                    <Logo />
                    <Menu />
                    <ContactUs />
                </div>
            </div>
        </div>
    )
}