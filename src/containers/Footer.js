import React from 'react'
import Footer from '../components/Footer'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column1>
                        <Footer.Title><img src={require("../assets/Logo/EduSampah.png")} alt="" /></Footer.Title>
                        <Footer.Title>HUBUNGI KAMI</Footer.Title>
                        <Footer.Link>Telp: 08123456789</Footer.Link>
                        <Footer.Link>Email: edusampah@email.com</Footer.Link>
                        <Footer.Link>Alamat: Jl. Jendral Sudirman No.10, Jakarta</Footer.Link>
                        <Footer.Wrapper1>
                            <Footer.Column5><Footer.Link href="https://www.facebook.com/"><FacebookIcon fontSize='medium'/></Footer.Link></Footer.Column5>
                            <Footer.Column5><Footer.Link href="https://www.twitter.com/"><TwitterIcon fontSize='medium'/></Footer.Link></Footer.Column5>
                            <Footer.Column5><Footer.Link href="https://www.instagram.com/"><InstagramIcon fontSize='medium'/></Footer.Link></Footer.Column5>
                            <Footer.Column5><Footer.Link href="https://www.linkedin.com/"><LinkedInIcon fontSize='medium'/></Footer.Link></Footer.Column5>
                        </Footer.Wrapper1>
                    </Footer.Column1>
                    <Footer.Column2>
                        <Footer.Title>MENU</Footer.Title>
                        <Footer.Link href="./">Beranda</Footer.Link>
                        <Footer.Link href="#edukasi">Edukasi</Footer.Link>
                        <Footer.Link href="#berita">Berita</Footer.Link>
                         <Footer.Link href="./VideoPage">Video</Footer.Link>
                        <Footer.Link href="./ReqDonation">Donasi</Footer.Link>
                        <Footer.Link href="./PageAboutUs">Tentang Kami</Footer.Link>
                    </Footer.Column2>
                    {/* <Footer.Column3>
                        
                    </Footer.Column3> */}
                </Footer.Row>
            </Footer.Wrapper>

            <Footer.Wrapper>
                <Footer.Column4>
                    <Footer.Link>Copyright © 2022. EduSampah. All rights reserved.</Footer.Link>
                </Footer.Column4>
            </Footer.Wrapper>
        </Footer>
    )
}
