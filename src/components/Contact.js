

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
    
      <div className="col-md-offset-1 col-md-10 col-sm-12">
        <form action="">
            <div className="col-md-4 col-sm-6">
                <input type="text" className="form-control" placeholder="Name" name="name" />
            </div>
            <div className="col-md-4 col-sm-6">
                <input type="email" className="form-control" placeholder="Email" name="email" />
            </div>
            <div className="col-md-4 col-sm-6">
                <input type="text" className="form-control" placeholder="Subject" name="subject" />
            </div>
            <div className="col-md-12 col-sm-12">
                <textarea className="form-control" placeholder="Message" name="message" rows="7"></textarea>
            </div>
            <div className="col-md-offset-2 col-md-8 col-sm-offset-2 col-sm-8">
                <input type="submit" class="form-control" value="Send Message" />
            </div>
        </form>
      </div>




    </div>
  )
}

export default Contact