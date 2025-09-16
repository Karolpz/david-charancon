import { HashRouter } from 'react-router-dom'
import './App.css'
import Router from './Router'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Home from './pages/Home'

function App() {


  return (
    <HashRouter>
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </HashRouter>

  )
}

export default App
