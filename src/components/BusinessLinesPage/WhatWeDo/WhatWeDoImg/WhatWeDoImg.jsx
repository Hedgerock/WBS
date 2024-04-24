import { useGetContext } from "../../hooks/useGetContext";
import './WhatWeDoImg.css'

export const WhatWeDoImg = () => {
    const { data, currentImg } = useGetContext();
    const { weDoImg } = data

    return (
        <div className="what-we-do-img">
        {
            weDoImg.map((img, index) => (
                <img 
                    key={ index } 
                    src={ img } 
                    alt="" 
                    className={ `what-we-do-img__src ${ img === currentImg ? 'active-image' : '' }` } 
                />
            ))
        }
        </div>
    )
}