import './Header.css'
import video from './assets/bg.mp4'
import { useAnimateComponent } from '../../hooks/useAnimateComponent'
import { HeaderBox } from '../HeaderBox'
import poster from './assets/poster.jpg'

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
                poster={ poster }
            >    
            </video>
            <HeaderBox />
        </div>
    )
}