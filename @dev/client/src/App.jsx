import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './Hero'
import './index.css'

function App() {

  return (
    <>
    <div className="bg-slate-900 bg-[radial-gradient(at_82%_22%,rgba(3,169,244,0.5)_0,transparent_22%),radial-gradient(at_2%_78%,rgba(3,169,244,0.5),transparent_22%)] bg-repeat-y h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </div>
    </>
  )
}

export default App
