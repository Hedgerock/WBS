import { BusinessLines } from "../BusinessLines/BusinessLines"
import { Footer } from "../Footer"
import './BusinessLinesPage.css'
import { HeaderBox } from "../HeaderBox"
import { Types } from "./Types"
export const BusinessLinesPage = () => {

    return (
        <div className="business-lines-page">
            <HeaderBox />
            <Types />
            <BusinessLines />
            <Footer />
        </div>
    )
}