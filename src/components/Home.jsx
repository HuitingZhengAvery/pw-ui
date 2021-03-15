import React, { useCallback } from 'react';
import nls from '../nls/Home.json';

const Home = ({page, setPage}) => {

  const handleNavOnclick = useCallback((pageTag) => {
    setPage(pageTag);
  })
  
  return (
    <>
        <div className="landing-page">
          <div className='landing-header'>
            <div className="landing-logo" />
            <div className="landing-title">{nls.landing_title}</div>
          </div>
        </div>
      {page === "about" &&
        <About page={page} setPage={setPage}/>}
    </>
  );
}

export default Home;
