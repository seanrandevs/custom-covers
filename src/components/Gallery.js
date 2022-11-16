import { BiLinkExternal } from "react-icons/bi";
import Motor1 from "../images/motor1.jpg";
import TireCover1 from "../images/tirecover1.jpeg";
import Sock1 from "../images/sock1.jpeg";
import Crankbait1 from "../images/crankbaitcover.jpeg";
import Powerpole1 from "../images/powerpolecover.jpeg";
import Hosesock1 from "../images/hosesock.png";




const Gallery = () => {
  return (
    <div className="gallery" id="gallery">
        <div className="parallax-section-about">
  		<div className="section-title">
  			<h5>WE ARE THE BEST</h5>
  			<h1 className="heading">SHOWCASE</h1>
  			<hr />
  			<p>Here you will find some of the different products we make. If theres anything special you would like for us to make, just shoot us a message.</p>
  		</div>
	</div>
        <div className="container">
                <div className="card">
                    <div className="imgBx">
                            <img src={Motor1} alt="motor1-img" />
                    </div>
                    <div className="sci">
                            <h4>Motor Covers</h4>
                            <BiLinkExternal className="photos" />
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx">
                            <img src={TireCover1} alt="motor1-img" />
                    </div>
                    <div className="sci">
                            <h4>Tire Covers</h4>
                            <BiLinkExternal className="photos" />
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx">
                            <img src={Sock1} alt="motor1-img" />
                    </div>
                    <div className="sci">
                            <h4>Rigging Hose Covers</h4>
                            <BiLinkExternal className="photos" />
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx">
                            <img src={Crankbait1} alt="motor1-img" />
                    </div>
                    <div className="sci">
                            <h4>Crankbait Covers</h4>
                            <BiLinkExternal className="photos" />
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx">
                            <img src={Powerpole1} alt="motor1-img" />
                    </div>
                    <div className="sci">
                            <h4>Power Pole Covers</h4>
                            <BiLinkExternal className="photos" />
                    </div>
                </div>
                <div className="card">
                    <div className="imgBx">
                            <img src={Hosesock1} alt="motor1-img" />
                    </div>
                    <div className="sci">
                            <h4>Sock Covers</h4>
                            <BiLinkExternal className="photos" />
                    </div>
                </div>
          

        </div>
    </div>
  )
}

export default Gallery