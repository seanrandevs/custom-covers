import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CarouselMain from "./components/CarouselMain";
import Work from "./components/work/Work";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {

  return (
    <>
    <div className="nav-sticky">
      <Header />
    </div>
          <CarouselMain/>
          <Work />
          <About />
          <Gallery />
          <Contact />
    </>
  )
}

export default App;
