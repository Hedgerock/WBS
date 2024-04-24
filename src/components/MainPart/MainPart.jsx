import { ContactUs } from '../ContactUs';
import { Earth } from '../Earth/Earth';
import './MainPart.css';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer';
import { ExpertiesBox } from '../ExpertiesBox';
import { BusinessLines } from '../BusinessLines';
import { WhyUs } from '../WhyUs';

export const MainPart = ({ children, className }) => {
    if (children) {
        return (
            <div className={`main-part main-part_${className ? className : 'default'}`}>
                <div className='main-part-box'>
                    { children }
                </div>
            </div>
        )
    }

    return (
        <div className="main-part">
            <div className="main-part-box">
                <div className="about-us">
                    <h2 className='about-us__title'>
                        We facilitate, coordinate, negotiate and help our customers find the best solution.
                    </h2>
                    <ContactUs className = { 'contact-us_main-part' } text = { 'Learn more' } link = { '/about-us' }/>
                </div>
                <div className="additional-info">
                    <Earth />
                    <AdditionalInfoContainer />
                </div>
                <div className="additional-info additional-info_experties">
                    <ExpertiesBox />
                </div>
            </div>
            <BusinessLines />
            <WhyUs />
        </div>
    )
}