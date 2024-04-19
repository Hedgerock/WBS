import { useAnimateComponent } from '../../hooks/useAnimateComponent';
import './AdditionalInfoContainer.css'

export const AdditionalInfoContainer = () => {
    const elementRef = useAnimateComponent();
    return (
        <div className="additional-info-container" ref={ elementRef }>
            <div className="additional-info-box">
                {/* 23 locations */}
                <span className="additional-info-box__current-val additional-info-box__current-val_locations"></span>
                <span className="additional-info-box__curent-title">Locations</span>
                <p className='additional-info-box-paragraph'>
                    <span className='additional-info-box-paragraph__title'>Full market coverage </span> 
                    with 23 offices located in every major shipping hub.
                </p>
            </div>
            <div className="additional-info-box">
                {/* 430 employees */}
                <span className="additional-info-box__current-val additional-info-box__current-val_employees"></span>
                <span className="additional-info-box__curent-title">Employees</span>
                <p className='additional-info-box-paragraph'>
                    <span className='additional-info-box-paragraph__title'>Multicultural and multilingual environment.</span>
                    <br />
                    Including more than 255 shipbrokers and over 42 nationalities, 
                    all making client service their priority.
                </p>
            </div>
        </div>
    )
}