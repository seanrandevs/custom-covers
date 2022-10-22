import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
 const CarouselComponent = () => {

  return (
    <div className="carousel-wrapper">
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
                <img src="./images/slider/boatslide1.jpg" alt="boatslide1"/>
            </div>
            <div>
                <img src="./images/slider/boatslide2.jpg" alt="boatslide2" />
            </div>
            <div>
                <img src="./images/slider/boatslide3.jpg" alt="boatslide3" />
            </div>
            <div>
                <img src="./images/slider/boatslide4.jpg" alt="boatslide4" />
            </div>
            <div>
                <img src="./images/slider/boatslide5.jpg" alt="boatslide5" />
            </div>
        </Carousel>
    </div>
);
}

export default CarouselComponent