import React, { useCallback, useState } from 'react';
import { pageTags, career, education } from "../utils/constants";
import '../sass/about.css';

const About = ({ setPage }) => {

  const handleOnclick = useCallback(() => {
    setPage(pageTags.home);
  })

  const [content, setContent] = useState(0);

  return (
    <>
      <div className='about'>
        <div className='about-nav'>
          <div className="sml-logo" onClick={handleOnclick} />
          <span className='about-nav-item'>Career</span>
          <span className='about-nav-item'>Education</span>
        </div>

        {(content == 0 || content == 1) &&
          career.map((item, idx) =>
            <>
              <div>{item.title}</div>
              <div>{item.company}{" "}{item.time}</div>
              <div>{item.content}</div>
            </>
          )}
        {(content == 0 || content == 2) &&
          education.map((item, idx) =>
            <>
              <div>{item.degree}</div>
              <div>{item.school}{" "}{item.time}</div>
            </>
          )}
      </div>
    </>
  );
}

export default About;
