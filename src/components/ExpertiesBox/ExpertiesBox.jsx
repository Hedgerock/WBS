import './ExpertiesBox.css'
import experties from './pic1.webp';

export const ExpertiesBox = () => {

    return (
        <>
            <div className="experties-box">
                <h2 className='experties-box__title'>Our Expertise</h2>
                <h3 className='experties-box__subtitle'>We take a pro-active approach to long-term strategic planning for our clients.</h3>
                <p className='experties-box__text'>
                    Our broking, 
                    operations and research teams are ready for all our clients' 
                    day to day requirements rooted in a shared long-term vision. 
                    Working in this way over many decades, we have built a market 
                    coverage that is among the most comprehensive. Our close relations 
                    with a great number of the leading shipowners, industrial producers, 
                    traders and shippers, greatly attest to this.
                </p>
            </div>
            <div className="experties-photo">
                <img className='experties-photo__src' src={ experties } alt="" />
            </div>
        </>
    )
}