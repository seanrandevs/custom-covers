import { useState, useEffect, useRef } from "react";
import { BsEnvelopeOpen, BsCheck2 } from "react-icons/bs";
import emailjs from '@emailjs/browser';

const Contact = () => {
	const text = "SEND MESSAGE" 
    const [buttonText, setButtonText] = useState(text);
	useEffect(()=> {
		const timer = setTimeout(()=> {
		   setButtonText(text);
		}, 2000);
		return ()=> clearTimeout(timer);
	 }, [buttonText]);

	const form = useRef();

	const sendEmail = (e) => {
	  e.preventDefault();
  	  emailjs.sendForm('service_slbd8lg', 'template_fl4350e', form.current, '_lsEPvQvamzaRJ3Do')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
		e.target.reset()
	};

  return (
    <div className="contact" id="contact">
    <div className="parallax-section-about">
  		<div className="section-title">
  			<h5>PLACE AN ORDER</h5>
  			<h1 className="heading">CONTACT US</h1>
  			<hr />
  			<p>If you have any questions or want to place and order, just shoot us a message and we will get back to you shortly.</p>
  		</div>
	</div>
		
	<form ref={form} onSubmit={sendEmail}>
		<div className="form-group row">
			<div className="col-md-4 col-sm-12">
				<input type="text" class="form-control" name="user_name" placeholder="Name" />
				</div>
				<div className="col-md-4 col-sm-12">
				<input type="email" class="form-control" name="user_email" placeholder="Email" />
				</div>
				<div className="col-md-4 col-sm-12">
				<input type="text" name="subject" class="form-control" placeholder="Subject" />
			</div>
		</div>
				<textarea name="message" className="form-control" placeholder="Message" cols="100" rows="7"></textarea>
				<div className="submit-btn">
 					<button type="submit" class="form-control" onClick={() => setButtonText("MESSAGE SENT")}>
					  {buttonText} {buttonText === "MESSAGE SENT" ?  <BsCheck2 className="check" /> : ""}
					</button>
				</div>
	</form>
	            

	        <div className="contact-detail">
				<div className="col-md-6 col-sm-6">
					<h3><BsEnvelopeOpen className="envelope" />  EMAIL</h3>
					<p>contact@company.com</p>
				</div>
			</div>
			<div className="footer">
			<div className="navbar-brand">CUSTOM COVERS</div>
			</div>

    </div>
  )
}

export default Contact