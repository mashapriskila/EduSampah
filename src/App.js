import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';

import PageAboutUs from './pages/AboutUs';
import ReqDonation from './components/ReqDonation';
import InfoDonasi from './components/InfoDonasi';
import Berita from './components/News';
import DonationArticle from './pages/AllDonation/DonationArticle';
import NewsArticle from './pages/AllNews/NewsArticle';
import {FooterContainer} from './containers/Footer';
import TableComponent from './components/Table';
import Education from './components/Education'
import SinglePost from './pages/SinglePost1/SinglePost';
import EducationPage from './pages/AllEducation/EducationPage.js';
import VideoPage from './pages/VideoPage/VideoPage';
import Video from './components/CardVideo/Video';
import HomeAboutUs from './components/HomeAboutUs';
import Edukasi2 from './pages/AllEducation/Edukasi2';


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Hero />
          <TableComponent />
          <Education />
          <Berita/>
          <InfoDonasi/>
          <Video/>
          <HomeAboutUs/>
        </Route>
        <Route exact path="/post/:id" component={SinglePost} />
        <Route path='/AllEdukasi'>
          <EducationPage/>
        </Route>
        <Route path='/AllEdukasi2'>
          <Edukasi2/>
        </Route>
        <Route path='/AllNews'>
          <NewsArticle/>
        </Route>
        <Route path='/VideoPage'>
          <VideoPage />
        </Route>
        <Route path='/ReqDonation'>
          <ReqDonation />
        </Route>
        <Route path='/PageAboutUs'>
          <PageAboutUs />
        </Route>
        <Route path='/AllDonationPage'>
          <DonationArticle />
        </Route>
        <Redirect to="/" />
      </Switch>
      <FooterContainer />
    </Router>
  )
}

export default App;