import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CarouselMain from "./components/CarouselMain";
import Work from "./components/work/Work";
import About from "./components/About";
import Gallery from "./components/Gallery";

function App() {

  return (
    <div>
      <Header />
      <CarouselMain/>
      <Work />
      <About />
      <Gallery />
    </div>
  );
}

export default App;
