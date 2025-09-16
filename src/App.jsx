import { HashRouter } from 'react-router-dom'
import './App.css'
import Router from './Router'
import Header from './layouts/Header'
import Footer from './layouts/Footer'

function App() {
  return (
    <HashRouter basename="/david-charancon/"> 
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </HashRouter>
  )
}

export default App
