

function Sections() {
	return(
	<div className="sections">
		<section class="hero">
				<h1>Welcome to [Your Site]</h1>
				<p>Your value proposition in one or two lines.</p>
				<a href="#services" class="cta-button">Learn More</a>
		</section>

		<section id="about">
				<h2>About Us</h2>
				<p>Brief intro about what you do, your mission, or your team.</p>
		</section>


		<section id="services">
				<h2>What We Offer</h2>
				<div class="service-cards">

				<div class="card">
						<h3>Service A</h3>
						<p>Description of Service A</p>
				</div>

				<div class="card">
						<h3>Service B</h3>
						<p>Description of Service B</p>
				</div>
				</div>
		</section>


		<section class="testimonials">
				<h2>What Clients Say</h2>
				<blockquote>"Great service!" - Customer</blockquote>
		</section>


		<section id="contact">
				<h2>Get in Touch</h2>
				<form>
				<input type="text" placeholder="Your name" required />
				<input type="email" placeholder="Your email" required />
				<textarea placeholder="Your message"></textarea>
				<button type="submit">Send Message</button>
				</form>
		</section>
	</div>
    )
}

export default Sections;