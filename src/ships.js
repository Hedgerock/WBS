import dryBulk from './components/BusinessLines/ships/dryBulk.jpg'
import tanker from './components/BusinessLines/ships/tanker.jpg'
import lng from './components/BusinessLines/ships/lng.jpeg'
import containerShip from './components/BusinessLines/ships/containerShip.jpg'

export const ships = [
    { 
        title: 'Dry Bulk', 
        img: dryBulk,
        description: 'Grains, Fertilizers, Iron ore, Coal, Bauxite, Chartering contracts & FFAs.',
        link: '/business-lines/dry-bulk' 
    },
    { 
        title: 'Tanker', 
        img: tanker,
        description: 'Clean and Dirty Petroleum Products, Edible Oils, Recycling of slops and sludges, Chartering contracts & FFAs.',
        link: '/business-lines/tanker' 
    },
    { 
        title: 'Container Ship', 
        img: containerShip,
        description: 'Car Carrier (PCTC), Cement, Container, Multipurpose (MPP) - Heavy Lift.',
        link: '/business-lines/container-ship' 
    },
    { 
        title: 'LNG', 
        img: lng,
        description: 'Newbuilding, Chartering, Sale and Purchase, Market Research & Consultancy.',
        link: '/business-lines/lng' 
    }
]