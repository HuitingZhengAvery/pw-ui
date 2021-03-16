import React, {useCallback, useState} from 'react';

const About = ({setPage}) => {

  const handleOnclick = useCallback(() => {
    setPage('landing');
  })
  
  return (
    <>
    <div>
      ama
    </div>
    </>
  );
}

export default About;
