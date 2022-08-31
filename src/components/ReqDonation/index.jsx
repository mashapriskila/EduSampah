import React from "react";
import './ReqDonation.css';
import HeroReqDonation from '../../assets/Hero/HeroReqDonationPage.png';

const ReqDonation = () => {
    return (
        <div className="heroReq">
            <img src={HeroReqDonation} alt="hero" />
            <iframe 
                title="donationForm" 
                src="https://docs.google.com/forms/d/e/1FAIpQLSf44P8I49kFBhFO25r8sYQ_npyBmVRtxkKhpjGEqXagzqy1xA/viewform?embedded=true" 
                width="680" 
                height="1250" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0">Memuat…
            </iframe>
            {/* <iframe 
                title="donationForm" 
                src="https://docs.google.com/forms/d/e/1FAIpQLSe3CyRfwDfutZWMcXA1_jK25t8-KKdWz-UsZBJedh4Suh5aYw/viewform?embedded=true" 
                width="640" 
                height="1080" 
                frameborder="0" 
                marginheight="0" 
                marginwidth="0">Loading…
            </iframe> */}
        </div>
    );
};

export default ReqDonation;