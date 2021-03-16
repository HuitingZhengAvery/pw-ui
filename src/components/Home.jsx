import React from "react";
import nls from "../nls/Home.json";
import NavItem from './NavItem';
import { pageTags } from '../utils/constants';

const NAV_STARTING_POINT = 2;

const Home = ({ setPage }) => {

  let navItems = Object.entries(pageTags).slice(NAV_STARTING_POINT).map(entry => entry[1]);

  return (
    <>
      <div className="home">
        <div className="home-header">
          <div className="home-logo" />
          <div className="home-title">{nls.landing_title}</div>
        </div>
        <div className="navigation">
          {navItems.map((item) => (
            <NavItem targetPage={item} setPage={setPage}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
