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
            
        </div>
    );
};

export default ReqDonation;


