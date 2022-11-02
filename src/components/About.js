import { useState } from "react"
const About = () => {
   const [show, setShow] = useState(false);
   const toggle = () => {
	setShow(!show);
   }

  return (
    <div className="about">
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
		<p className="color-white">I started off making custom covers for my own boat and equipment. It got alot of attention and people starting asking me for custom covers to fit their boating needs.</p>
		<p className="color-white">Since then, We have made hundreds of differant custom covers for many differant styles of boats and equipment. We look forward to growing and making sure our customers boats and equipment stay protected.</p>
	</div>
	<div className="why-us">
	 <h3 class="mobile-top">WHY CHOOSE US?</h3>
	  <div className="panel">
		<h4 className="panel-title" onClick={toggle}>Quick Response</h4>
		<div className="panel-body" style={show ? {display: 'block'} : {display: 'none'}}>
		  <p>We do our very best in respoding as quick as possible. We have a lot of orders to fill, due to high demand. We want to make sure every customer is satisfied and taken care of.</p>
		</div>
	  </div>
	  <div className="panel">
		<h4 className="panel-title" onClick={toggle}>High Quality Team</h4>
		<div className="panel-body" style={show ? {display: 'block'} : {display: 'none'}}>
		  <p>Currently I am doing the covers myself, due to the fact my lazy son likes to spend his time at the gym trying to look buff and he is always working at his other job at an ice cream factoy like Willy Wonka.</p>
		</div>
	  </div>
	  <div className="panel">
		<h4 className="panel-title" onClick={toggle}>ONLY THE BEST MATERIAL</h4>
		<div className="panel-body" style={show ? {display: 'block'} : {display: 'none'}}>
		  <p>We use the best material on the market that provides a long lasting protection for your boat and equipment. Our covers do not fade in the sun and last a very long time.</p>
		</div>
	  </div>
		

	</div>
</div>
	
</div> 
	</div>
			
  )
}

export default About