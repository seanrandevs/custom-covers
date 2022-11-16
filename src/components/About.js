import { useState } from "react"


const About = () => {
  const [panel1, setPanel1] = useState(false);
  const [panel2, setPanel2] = useState(false);
  const [panel3, setPanel3] = useState(false);
  

  return (
    <div className="about" id="about">
     <div className="parallax-section-about">
	  <div className="section-title">
		<h5>CUSTOM COVERS</h5>
		<h1 className="heading color-white">WHO WE ARE</h1>
		<hr />
		<p className="color-white">Making the best covers to fit your boating needs.</p>
	  </div> 

 <div className="our-story">
	<div className="founder">
		<h3 className="color-white">OUR STORY</h3>
		<h2>CUSTOM COVERS</h2>
		<h4>OWNER AND FOUNDER - Phillip Ransonet</h4>
		<p className="color-white">I started off making custom covers for my own boat and equipment. It got a lot of attention and people starting asking me for custom covers to fit their boating needs.</p>
		<p className="color-white">Since then, We have made hundreds of different custom covers for many different styles of boats and equipment. We look forward to growing and making sure our customers boats and equipment stay protected.</p>
	</div>
	<div className="why-us">
	 <h3 class="mobile-top">WHY CHOOSE US?</h3>
	  <div className="panel">
		<h4 className="panel-title" onClick={() => setPanel1(!panel1)}>Quick Response</h4>
 		<p className="panel-body" style={panel1 ? {display: "block"} : {display: "none"}}>We do our very best in responding as quick as possible. We have a lot of orders to fill, due to high demand. We want to make sure every customer is satisfied and taken care of.</p>
	  </div>
	  <div className="panel">
		<h4 className="panel-title" onClick={() => setPanel2(!panel2)}>Variety of Products</h4>
 		<p className="panel-body" style={panel2 ? {display: "block"} : {display: "none"}}>We make boat covers, motor covers, rigging hose covers, power pole covers, sock covers, and crankbait covers.</p>
	  </div>
	  <div className="panel">
		<h4 className="panel-title" onClick={() => setPanel3(!panel3)}>Using The Best Material</h4>
 		<p className="panel-body" style={panel3 ? {display: "block"} : {display: "none"}}>We use the best material on the market that provides a long lasting protection for your boat and equipment. Our covers do not fade in the sun and last a very long time.</p>
	  </div>
	</div>
</div>
	
</div> 
	</div>
			
  )
}

export default About