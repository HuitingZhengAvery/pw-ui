import React, { useCallback } from 'react';
import nls from '../nls/Home.json';

const Home = ({page, setPage}) => {

  const handleNavOnclick = useCallback((pageTag) => {
    setPage(pageTag);
  })
  
  return (
    <>
        <div className="home">
          <div className="home-header">
            <div className="home-logo" />
            <div className="home-title">{nls.landing_title}</div>
          </div>
          <div></div>
        </div>
    </>
  );
}

export default Home;
