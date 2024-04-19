import { Ship } from './Ship'
import './BusinessLines.css'

export const BusinessLines = () => {

    return (
        <div className="business-lines" id = "business-lines">
            <div className="ship-box">
                <Ship />
            </div>
        </div>
    )
}