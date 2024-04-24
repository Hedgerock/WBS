import { useEffect, useState } from "react";
import { Footer } from "../../Footer"
import { HeaderBox } from "../../HeaderBox"
import { MainPart } from "../../MainPart";
import { Types } from "../Types";
import './ShipPage.css'
import { ContentBox } from "../ContentBox";
import WhatWeDoProvider from '../context/WhatWeDoContext'
import { WhatWeDo } from "../WhatWeDo";

export const ShipPage = ({ data, isShip }) => {
    const { mainImg, name, title, boxTitle, boxText, marketResearch } = data;
    const { lastBoxTitle, lastBoxText } = data;
    const { boxImg = [], weDoImg = [], lastBoxImg = [] } = data
    const [ currentImg, setCurrentImg ] = useState(weDoImg[0])
    const [ currentList, setCurrentList ] = useState(marketResearch)
    const [ start, setStart ] = useState(5);

    useEffect(() => {
        setCurrentImg(weDoImg[0])
        setCurrentList(marketResearch)
        setStart(5)
    }, [marketResearch, weDoImg])

    return (
        <div className="ship-page">
            <div className="ship-page-container">
                <HeaderBox />
                <div className="current-type">
                    <img className = "current-type__src"  src = { mainImg } alt = '' key={ mainImg } />
                </div>
                <h3 className="ship-page-container__title">{ name }</h3>
                { isShip && <Types setCurrentImg = { setCurrentImg } weDoImg = { weDoImg }/>}
            </div>
            <MainPart className={ 'ship-page' }>
                <h3 className="ship-page__title">{ title }</h3>
                <ContentBox images = { boxImg } title = { boxTitle } text = { boxText }/>
                <ContentBox 
                    images = { lastBoxImg} 
                    title = { lastBoxTitle } 
                    text = { lastBoxText }
                    className = { 'reversed' }
                />
            </MainPart>
            <WhatWeDoProvider 
                    value={ { data, currentImg, currentList, start, setCurrentImg, setCurrentList, setStart } }
            >
                <WhatWeDo />
            </WhatWeDoProvider>
            <Footer />
        </div>
    )
}