import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Boat1 from "../images/boatslide1.jpg";
import Boat2 from "../images/boatslide2.jpg";
import Boat3 from "../images/boatslide3.jpg";
import Boat4 from "../images/boatslide4.jpg";
import Boat5 from "../images/boatslide5.jpg";
 const CarouselMain = () => {

  return (
    <div className="carousel-wrapper" id="home">
        <Carousel 
        infiniteLoop
        autoPlay
        showArrows
        transitionTime={1000}
        thumbWidth={200}
        interval={4000}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
          hasPrev && (
              <button className="btn-left" onClick={clickHandler}>
                  <FaAngleLeft size={30} />  
              </button>
          )
      }
      renderArrowNext={(clickHandler, hasNext, labelNext) =>
          hasNext && (
              <button className="btn-right" onClick={clickHandler}>
                  <FaAngleRight size={30} />
              </button>
          )
      }
        >
            <div>
                <img src={Boat1} alt="boatslide1"/>
            </div>
            <div>
                <img src={Boat2} alt="boatslide2" />
            </div>
            <div>
                <img src={Boat3} alt="boatslide3" />
            </div>
            <div>
                <img src={Boat4} alt="boatslide4" />
            </div>
            <div>
                <img src={Boat5} alt="boatslide5" />
            </div>
        </Carousel>
    </div>
);
}

export default CarouselMain