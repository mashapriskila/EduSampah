import React from 'react';
import Card from "./Card";
import "./Slider.css";

const InfoDonasi = () => {
    return (
        <div className='layout'>
            <p id="info-donasi">Informasi Donasi</p>
            <div className="card">
                <Card/>
                <div className="btn-more-wrap">
                <a href="/AllDonationPage"><button>Lihat Selengkapnya</button></a>
                </div>
            </div>
        </div>

        
    )
    
}


export default InfoDonasi;