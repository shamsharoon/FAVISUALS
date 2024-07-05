import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Testimonials from "./components/TestimonialSection16"
import Pricing from "./components/Pricing"

function App() {
  return (
    <>
      <Navbar />
      <div className="md:ml-[223px] flex flex-col gap-5">
        <Hero />
        <About />
        <Portfolio />
        <Testimonials />
        <Pricing />
      </div>
      </>
  )
}

export default App
