import React from "react";
import './AboutUs.css';
import AboutUs from '../../assets/Logo/AboutUs.png';

const PageAboutUs = () => {
    return (
        <div className="section-aboutus">
			<div className="container-aboutus">
				<div className="AboutUs">
					<div className="title">
						<h1>Tentang Kami</h1>
					</div>
					<div className="content">
						<p>EduSampah adalah sebuah website yang bertujuan untuk memberikan edukasi tentang pengelolaan sampah dengan baik dan informasi terkini seputar sampah kepada masyarakat. Mulai dari edukasi mengenai cara pemisahan limbah atau sampah yang reusable dan zero waste, cara penerapan zero waste lifestyle hingga dampak-dampak positif dan negatif yang akan diterima kita sebagai manusia dan lingkungan.</p>
					</div>
					<div className="social">
						<a href='https://www.facebook.com/'><i className="fa-brands fa-facebook-square"></i></a>
						<a href='https://www.twitter.com/'><i className="fa-brands fa-twitter"></i></a>
						<a href='https://www.instagram.com/'><i className="fa-brands fa-instagram"></i></a>
						<a href='https://www.linkedin.com/'><i className="fa-brands fa-linkedin"></i></a>
					</div>
				</div>
				<div className="aboutUsLogo">
					<img src={AboutUs} alt='aboutus'/>
				</div>
			</div>
		</div>
    )
}

export default PageAboutUs;