import Navbar from "../Navbar/Navbar"
import About from "./About/About"
import Contact from "./Contact/Contact"
import Hero from "./Hero/Hero"
import MyExperience from "./MyExperience/MyExperience"
import MyService from "./MyService/MyService"
import Projects from "./Projects/Projects"

const IndexPage = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <MyService/>
      <Projects/>
      <MyExperience/>
      <Contact/>
    </div>
  )
}

export default IndexPage
