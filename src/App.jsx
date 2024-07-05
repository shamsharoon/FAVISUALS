import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import Footer from "./components/Footer"
import useViewportHeight from "./components/useViewportHeight"

// TODO: Fix footer so that the phone# and email are not underlined and ontop of each other
// TODO: It Should say like book with me now above the footer

function App() {
  useViewportHeight();
  return (
    <>
      <Navbar />
      <div className="md:ml-[223px] flex flex-col gap-5">
        <Hero />
        <About />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Footer />
      </div>
      </>
  )
}

export default App
