import React, { useState } from 'react';
import pageTags from '../utils/constants';
import Home from './Home';
import About from './About';
import MyCat from './MyCat';
import Games from './Games';
import Contact from './Contact';

import '../sass/landingPage.css';

const LandingPage = () => {

  const [page, setPage] = useState(pageTags.home);
  
  return (
    <>
      <div className="untitled-landing">
        {page === pageTags.error &&
          <Error page={page} setPage={setPage} />}
        {page === pageTags.home &&
          <Home page={page} setPage={setPage} />}
        {page === pageTags.about &&
          <About page={page} setPage={setPage}/>}
        {page === pageTags.cat &&
          <MyCat page={page} setPage={setPage}/>}
        {page === pageTags.games &&
          <Games page={page} setPage={setPage}/>}
        {page === pageTags.contact &&
          <Contact page={page} setPage={setPage}/>}
      </div>
    </>
  );
}

export default LandingPage;
