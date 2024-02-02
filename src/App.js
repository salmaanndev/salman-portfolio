import NavBar from "./components/Navbar/NavBar";
import NavbarButtons from "./components/NavbarButtons/NavbarButtons";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Layout from "./components/layout/Layout";
import ServicesCard from "./components/servicesCard/ServicesCard";
import { Link as ScrollLink } from 'react-scroll';
import TaskList from "./components/taskManager/TaskList";
import Footer from "./components/footer/Footer";
//import { useInView } from 'react-intersection-observer';

function App() {

  const scrollToComponent = () => {
    const component = document.getElementById('services' || 'about' || 'projects' || 'contact');
    if (component) {
      component.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="app">
        {/*Header Start */}
        <div className="header">
          <NavBar >
            <ScrollLink to="footer" smooth={true} duration={1500} style={{ fontSize: '50px', margin: "auto" }}>
              <NavbarButtons name="Home" onClick={scrollToComponent} />
            </ScrollLink>
            <ScrollLink to="about" smooth={true} duration={1500} style={{ fontSize: '50px', margin: "auto" }}>
              <NavbarButtons name="About" onClick={scrollToComponent} />
            </ScrollLink>
            <ScrollLink to="services" smooth={true} duration={1500} style={{ fontSize: '50px', margin: "auto" }}>
              <NavbarButtons name="Services" onClick={scrollToComponent} />
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={1500} style={{ fontSize: '50px', margin: "auto" }}>
              <NavbarButtons name="Projects" onClick={scrollToComponent} />
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={1500} style={{ fontSize: '50px', margin: "auto" }}>
              <NavbarButtons name="Contact" onClick={scrollToComponent} />
            </ScrollLink>
          </NavBar>
        </div>
        {/*Header End */}


        {/*Layout Start */}
        <div className="body">
          <Layout id="services">
            <ServicesCard title="Frontend Development" desc="Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting fugit sed thisnquia consequuntur magni doloreseos designer heresm qui" />
            <ServicesCard title="Backend Development" desc="Nemo design enim ipsam voluptatem quim voluptas sit aspernaturaut odit auting fugit sed thisnquia consequuntur magni doloreseos designer heresm qui " />
          </Layout>
          <About id="about" />
          <Contact id="contact" />
          <TaskList id="projects" />
          <Footer id="footer" />


          {/*<div className="scrollDiv">
            <div className="scrollBtn">
              <button
                className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
                onClick={scrollToTop}
              >
                <FaArrowAltCircleUp />
              </button>
            </div>
  </div> */}

        </div>
        {/*Layout End */}


      </div>


    </>

  );
}

export default App;
