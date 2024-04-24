import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import ContactUsPage from "../components/ContactUsPage/ContactUsPage";
import { Helmet } from "react-helmet";
import { TermsAndConditions } from "../components/TermsAndConditions";
import { BusinessLinesPage } from "../components/BusinessLinesPage";
import { shipData } from "../components/BusinessLinesPage/shipsData/shipsData";
import { ShipPage } from "../components/BusinessLinesPage/ShipPage";
import { aboutUsData } from "../aboutUsData/aboutUsData";
import { NotExistsPage } from "../components/NotExistsPage";
import { ScrollToTop } from "../components/ScrollToTop/ScrollToTop";

export const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <Helmet>
              <title>WBS</title>
          </Helmet>
          <ScrollToTop />
          <App />
        </>
      ),
      errorElement: <NotExistsPage />
    },
    {
      path: '/WBS',
      element: (
        <>
          <Helmet>
              <title>WBS</title>
          </Helmet>
          <ScrollToTop />
          <App />
        </>
      ),
      errorElement: <NotExistsPage />
    },
    {
      path: '/contact-us',
      element: (
        <>
          <Helmet>
              <title>Contact Us</title>
          </Helmet>
          <ScrollToTop />
          <ContactUsPage />
        </>
      ),
      errorElement: <NotExistsPage />
    },
    {
      path: '/terms-and-conditions',
      element: (
        <>
          <Helmet>
              <title>Terms and conditions</title>
          </Helmet>
          <ScrollToTop />
          <TermsAndConditions />
        </>
      ),
      errorElement: <NotExistsPage />
    },
    {
      path: '/business-lines',
      element: (
        <>
          <Helmet>
              <title>Business lines</title>
          </Helmet>
          <ScrollToTop />
          <BusinessLinesPage />
        </>
      ),
      errorElement: <NotExistsPage />
    },
    {
      path: '/business-lines/dry-bulk',
      element: (
        <>
          <Helmet>
              <title>Dry Bulk - Business lines</title>
          </Helmet>
          <ScrollToTop />
          <ShipPage data ={ shipData.dryBulk } isShip = { true }/>
        </>
      ),
      errorElement: <NotExistsPage />
    },
    {
      path: '/business-lines/tanker',
      element: (
        <>
          <Helmet>
              <title>Tanker - Business lines</title>
          </Helmet>
          <ScrollToTop />
          <ShipPage data ={ shipData.tanker } isShip = { true }/>
        </>
      ),
      errorElement: <NotExistsPage />
    },
    {
      path: '/business-lines/container-ship',
      element: (
        <>
          <Helmet>
              <title>Container Ship - Business lines</title>
          </Helmet>
          <ScrollToTop />
          <ShipPage data ={ shipData.containerShip } isShip = { true }/>
        </>
      ),
      errorElement: <NotExistsPage />
    },
    {
      path: '/business-lines/lng',
      element: (
        <>
          <Helmet>
              <title>LNG - Business lines</title>
          </Helmet>
          <ScrollToTop />
          <ShipPage data ={ shipData.lng } isShip = { true }/>
        </>
      ),
      errorElement: <NotExistsPage />
    },
    {
      path: '/about-us',
      element: (
        <>
          <Helmet>
              <title>About Us</title>
          </Helmet>
          <ScrollToTop />
          <ShipPage data ={ aboutUsData }/>
        </>
      ),
      errorElement: <NotExistsPage />
    },
])