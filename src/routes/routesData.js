import { Helmet } from "react-helmet";
import { aboutUsData } from "../aboutUsData/aboutUsData";
import App from "../components/App";
import { BusinessLinesPage } from "../components/BusinessLinesPage";
import { ShipPage } from "../components/BusinessLinesPage/ShipPage";
import { shipData } from "../components/BusinessLinesPage/shipsData/shipsData";
import ContactUsPage from "../components/ContactUsPage/ContactUsPage";
import { TermsAndConditions } from "../components/TermsAndConditions";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";
import { NotExistsPage } from "../components/NotExistsPage";

export const routesData = [
    {
        link: '/',
        title: 'WBS',
        component: <App />
    },
    {
        link: '/WBS',
        title: 'WBS',
        component: <App />
    },
    {
        link: '/WBS/contact-us',
        title: 'Contact Us - WBS',
        component: <ContactUsPage />
    },
    {
        link: '/WBS/terms-and-conditions',
        title: 'Terms and conditions - WBS',
        component: <TermsAndConditions />
    },
    {
        link: '/WBS/business-lines',
        title: 'Business lines - WBS',
        component: <BusinessLinesPage />
    },
    {
        link: '/WBS/business-lines/dry-bulk',
        title: 'Dry Bulk - Business lines - WBS',
        component: <ShipPage data ={ shipData.dryBulk } isShip = { true }/>
    },
    {
        link: '/WBS/business-lines/tanker',
        title: 'Tanker - Business lines - WBS',
        component: <ShipPage data ={ shipData.tanker } isShip = { true }/>
    },
    {
        link: '/WBS/business-lines/container-ship',
        title: 'Container ship - Business lines - WBS',
        component: <ShipPage data ={ shipData.containerShip } isShip = { true }/>
    },
    {
        link: '/WBS/business-lines/lng',
        title: 'LNG - Business lines - WBS',
        component: <ShipPage data ={ shipData.lng } isShip = { true }/>
    },
    {
        link: '/WBS/about-us',
        title: 'About Us - WBS',
        component: <ShipPage data ={ aboutUsData } isShip = { false }/>
    },
]

export const initRoutes = (routesData) => {
    return routesData.map(item => {
        const { title, link, component } = item
        return  {
            path: link,
            element: (
              <>
                <Helmet>
                    <title>{ title }</title>
                </Helmet>
                <ScrollToTop />
                { component }
              </>
            ),
            errorElement: <NotExistsPage />
          }
    })
}
