import { BsEnvelopeOpen } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="contact">
    <div className="parallax-section-about">
  		<div className="section-title">
  			<h5>PLACE AN ORDER</h5>
  			<h1 className="heading">CONTACT US</h1>
  			<hr />
  			<p>If you have any questions or want to place and order, just shoot us a message and we will get back to you shortly.</p>
  		</div>
	</div>
     
	<form>
		<div className="form-group row">
			<div className="col-md-4 col-sm-12">
				<input type="text" class="form-control" placeholder="Name" />
				</div>
				<div className="col-md-4 col-sm-12">
				<input type="email" class="form-control" placeholder="Email" />
				</div>
				<div className="col-md-4 col-sm-12">
				<input type="text" class="form-control" placeholder="Subject" />
			</div>
		</div>
				<textarea name="" className="form-control" placeholder="Message" cols="100" rows="7"></textarea>
				<div className="submit-btn">
					<input type="submit" class="form-control" value="SEND MESSAGE" />
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