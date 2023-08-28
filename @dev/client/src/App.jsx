import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './Hero'
import './index.css'

function App() {

  return (
    <>
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
    </>
  )
}

export default App
