import dryBulkImg1 from './images/dryBulkImg1.jpg'
import dryBulkImg2 from './images/dryBulkImg2.webp'
import dryBulkImg3 from './images/dryBulkImg3.webp'
import dryBulkImg4 from './images/dryBulkImg4.webp'
import dryBulkImg5 from './images/dryBulkImg5.jpg'
import dryBulkImg6 from './images/dryBulkImg6.jpeg'
import dryBulkImg7 from './images/dryBulkImg7.webp'
import dryBulkImg8 from './images/dryBulkImg8.webp'
import dryBulkImg9 from './images/dryBulkImg9.jpg'

import tankerImg1 from './images/tankerImg1.jpg'
import tankerImg2 from './images/tankerImg2.webp'
import tankerImg3 from './images/tankerImg3.jpg'
import tankerImg4 from './images/tankerImg4.jpg'
import tankerImg5 from './images/tankerImg5.webp'
import tankerImg6 from './images/tankerImg6.webp'
import tankerImg7 from './images/tankerImg7.jpg'
import tankerImg8 from './images/tankerImg8.webp'
import tankerImg9 from './images/tankerImg9.webp'

import containerShipImg1 from './images/containerShipImg1.jpeg'
import containerShipImg2 from './images/containerShipImg2.jpg'
import containerShipImg3 from './images/containerShipImg3.jpg'
import containerShipImg4 from './images/containerShipImg4.jpg'
import containerShipImg5 from './images/containerShipImg5.jpg'
import containerShipImg6 from './images/containerShipImg6.webp'
import containerShipImg7 from './images/containerShipImg7.jpg'
import containerShipImg8 from './images/containerShipImg8.jpg'
import containerShipImg9 from './images/containerShipImg9.jpg'

import lngImg1 from './images/lngImg1.jpeg'
import lngImg2 from './images/lngImg2.jpg'
import lngImg3 from './images/lngImg3.jpeg'
import lngImg4 from './images/lngImg4.jpg'
import lngImg5 from './images/lngImg5.jpg'
import lngImg6 from './images/lngImg6.jpg'
import lngImg7 from './images/lngImg7.jpg'
import lngImg8 from './images/lngImg8.webp'
import lngImg9 from './images/lngImg9.webp'

export const shipData = {
    dryBulk: {
        mainImg: dryBulkImg9,
        name: 'Dry Bulk',
        title: 'Grains, Fertilizers, Iron ore, Coal, Bauxite, Chartering contracts & FFAs.',
        boxImg: [dryBulkImg1, dryBulkImg2, dryBulkImg3],
        boxTitle: 'Solutions for All Dry Cargo Chartering Needs',
        boxText: 'Our dedicated dry cargo experts deliver best-in-class chartering solutions for any dry bulk product. Our extensive market intelligence data and unmatched chartering experience ensure that every transaction is secure.',
        marketResearch: ['Comprehensive analysis', 'Customized reports', 'Dry FFA analysis', 'Monthly market reports', 'Weekly market reports'],
        balticExchange: ['Baltic Dry Index, BDI', 'Freight derivative contracts', 'Spot contracts'],
        postFix: ['Compliance assurance', 'Demurrage estimations', 'Dispute resolution', 'Post-fixture operations'],
        weDoImg: [dryBulkImg4, dryBulkImg5, dryBulkImg6],
        lastBoxTitle: 'Complex Contracts',
        lastBoxText: 'Our comprehensive range of services includes outsourcing all shipping requirements to our experts, from upstream operations to downstream delivery. With long-standing experience in shipping logistics, we support a variety of contract solutions, including complex industrial shipping contracts.',
        lastBoxImg: [ dryBulkImg7, dryBulkImg8 ]
    },
    tanker: {
        mainImg: tankerImg1,
        name: 'Tanker',
        title: 'Clean and Dirty Petroleum Products, Edible Oils, Recycling of slops and sludges, Chartering contracts & FFAs.',
        boxImg: [tankerImg2, tankerImg3, tankerImg4],
        boxTitle: 'Innovated and Expert Charting Solutions',
        boxText: 'In every corner of the world, our tanker department delivers an unparalleled shipping experience. Our dedicated tanker analysts provide comprehensive market intelligence to help each broker ensure their clients are expertly navigating the ever-changing shipping industry.',
        marketResearch: ['Comprehensive analysis', 'Customized reports', 'Monthly market reports', 'Weekly market reports', 'Wet FFA analysis'],
        balticExchange: ['Baltic Dirty Tanker Index, BDTI', 'Freight derivative contracts', 'Spot contracts'],
        postFix: ['Claims handling','Compliance assurance', 'Demurrage estimations', 'Post-fixing operations'],
        weDoImg: [tankerImg5, tankerImg6, tankerImg7],
        lastBoxTitle: 'Vessel Acquisition',
        lastBoxText: 'We work alongside our Assets Department to offer vessel acquisition against long term employment for various Oil & Gas majors and traders. In 2021, we placed newbuilding orders for a series of Dual Fuel LR2 (LNG) carriers at GSI Shipyard on the back of long term time charters from Total Energies.',
        lastBoxImg: [ tankerImg8, tankerImg9 ]
    },
    containerShip: {
        mainImg: containerShipImg1,
        name: 'Container Ship',
        title: 'Car Carrier (PCTC), Cement, Container, Multipurpose (MPP) - Heavy Lift.',
        boxImg: [containerShipImg2, containerShipImg3, containerShipImg4],
        boxTitle: 'One Stop Shop',
        boxText: 'We offer comprehensive global coverage through our technical and commercial expertise and longstanding experience over the entire spectrum of chartering activities, from spot to project to long term deals and from short sea to deep sea trades. Through efficient internal synergies, we also cater to our clients’ demands in terms of sale & purchase and newbuilding transactions as well as valuations. Our team is armed with strategic proprietary market intelligence, delivering the highest quality rapid and reliable information to our valued customers. We pride ourselves on excellent client service.',
        btnTitles: ['VESSELS', 'SERVICES', 'PANEL SHIPBROKER'],
        marketResearch: ['Car carrier (PCTC)', 'Cement', 'Containership', 'Multipurpose (MPP) / Heavy lift'],
        balticExchange: ['Chartering', 'Consulting services'],
        postFix: ['Newbuilding', 'Sale & Purchase', 'Valuations'],
        weDoImg: [containerShipImg5, containerShipImg6, containerShipImg7],
        lastBoxTitle: 'Complex Contracts',
        lastBoxText: `Container ships carry most of the world's manufactured goods and products, usually on scheduled liner services. Container ships transport a combination of two standardized container sizes known as 20- or 40-feet equivalent units, abbreviated to TEUs and FEUs.`,
        lastBoxImg: [ containerShipImg8, containerShipImg9 ]
    },
    lng: {
        mainImg: lngImg1,
        name: 'LNG',
        title: 'Newbuilding, Chartering, Sale and Purchase, Market Research & Consultancy.',
        boxImg: [lngImg2, lngImg3, lngImg4],
        boxTitle: 'We are more than just shipbrokers',
        boxText: 'Our team of skilled professionals excels in delivering fully customized solutions for all your LNG shipping needs. With our in-house market intelligence and extensive expertise spanning across different LNG shipping sectors, we provide comprehensive advisory services and take the lead on major projects, starting from detailing technical specifications to finalizing shipbuilding contracts and negotiating further employment.',
        btnTitles: ['MARKET RESEARCH', 'CONSULTANCY', 'VESSELS'],
        marketResearch: [ 'Consumption evaluations', 'Fleet optimization', 'Freight analysis', 'Ship Finance Models', 'Supply/Demand economic modelling', 'UFC cost model'],
        balticExchange: ['Chartering', 'Contractual expertise', 'Project assessment', 'Tendering process', 'Vessel valuation'],
        postFix: [ 'Floating LNG facilities (FLNGs)', 'Floating Storage Regasification Units (FSRUs)', 'Floating Storage Units (FSUs)', 'LNG Bunkering Vessels', 'LNG Carriers',],
        weDoImg: [lngImg5, lngImg6, lngImg7],
        lastBoxTitle: 'Our Expertise',
        lastBoxText: 'We possess a comprehensive portfolio of concluded deals and executed projects. Among our clients are major European utility companies, oil and gas producers, and well-established shipowners. We also take the lead in several innovative, one-of-a-kind projects that go beyond the boundaries of conventional shipping. This is made possible by our extensive network, which encompasses shipyards and design shops across the globe.',
        lastBoxImg: [ lngImg8, lngImg9 ]
    },
}