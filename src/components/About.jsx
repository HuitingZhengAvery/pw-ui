import React, {useCallback, useState} from 'react';
import '../sass/landingPage.css';

const About = ({setPage}) => {

  const handleOnclick = useCallback(() => {
    setPage('landing');
  })
  
  return (
    <>
    <button onClick={handleOnclick}>swap</button>
    </>
  );
}

export default About;
