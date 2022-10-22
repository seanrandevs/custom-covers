import './scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CarouselComponent from "./components/CarouselComponent";
import Work from "./components/Work";
import WorkCarousel from "./components/WorkCarousel";

function App() {

  return (
    <div>
      <Header />
      <CarouselComponent />
      <Work />
      <WorkCarousel />
    </div>
  );
}

export default App;
