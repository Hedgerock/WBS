import { InformationBox } from './InformationBox'
import { ProcessesBox } from './ProcessesBox'
import './WhatWeDo.css'
import { WhatWeDoImg } from './WhatWeDoImg'

export const WhatWeDo = () => {

    return (
        <div className="what-we-do">
           <WhatWeDoImg />
            <div className="processes">
                <ProcessesBox />
                <InformationBox />
            </div>
        </div>
    )
}