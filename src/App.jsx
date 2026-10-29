import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import './App.css'



export default function App() {
  return (
    <div className="app">
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <BrowserRouter>
        <Home />
      </BrowserRouter>
      <Footer />
    </div>
  )
}
