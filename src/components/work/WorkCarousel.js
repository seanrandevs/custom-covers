import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';

const WorkCarousel = () => {
	const options = {
		loop: true,
		dots: true,
		responsiveClass: true,
		autoplay: true,
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 1,
			},
			1000: {
				items: 2,
			},
			1100: {
				items: 3,
			}
		},
	}
	
  return (
    <div>
		<OwlCarousel
		className='owl-theme'
		{...options}
		>
		<div className="item">
			<h3>Keith Altazin</h3>
			<hr />
			<p>I got my travel cover made, it's awesome. Yes, it's a Phil Ransonet cover. This man doesn't give himself enough credit.</p>
		</div>

		<div className="item">
			<h3>Gerald Foulcard</h3>
			<hr />
			<p>Thanks Phil Ransonet for making my motor and tire cover. Awesome work man!</p>
		</div>

		<div className="item">
			<h3>Dwayne Leglue</h3>
			<hr />
			<p>Why get his custom cover? Phil is a boat owner and fisherman, he understands whats important to us.He backs his work as well. By far the best cover i've ever had.</p>
		</div>

		<div className="item">
			<h3>Michael Liner</h3>
			<hr />
			<p>Got my tire and boat cover from Custom Covers. Quality craftsmanship and a great guy. Thank you Phil Ransonet!</p>
		</div>

		<div className="item">
			<h3>Kenny Stanley</h3>
			<hr />
			<p>I got a boat and motor cover all in one. It's tight, sharp, works and fits perfect. If you need one, he is the man.</p>
		</div>
		</OwlCarousel>
    </div>
  )
}

export default WorkCarousel
