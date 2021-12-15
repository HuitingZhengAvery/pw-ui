import React, {useCallback, useState} from 'react';
import '../sass/landingPage.css';

const Blogs = ({setPage}) => {

  const handleOnclick = useCallback(() => {
    setPage('landing');
  })
  
  return (
    <>
    <div>
      games
    </div>
    </>
  );
}

export default Blogs;
