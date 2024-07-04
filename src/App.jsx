import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"

function App() {
  return (
    <>
      <Navbar />
      <div className="md:ml-[223px]">
        <Hero />
        <About />
        <Portfolio />
      </div>
      </>
  )
}

export default App
