
import './App.css'
import { Footer } from './Footer'
import { Header } from './Header'
import { MainPart } from './MainPart'

const App = () => {
  return (
    <div className="main-container">
        <Header />
        <MainPart />
        <Footer />
    </div>
  )
}

export default App