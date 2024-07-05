import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import Testimonials from "./components/TestimonialSection16"

function App() {
  return (
    <>
      <Navbar />
      <div className="md:ml-[223px] flex flex-col gap-5">
        <Hero />
        <About />
        <Portfolio />
        <Testimonials />
      </div>
      </>
  )
}

export default App
