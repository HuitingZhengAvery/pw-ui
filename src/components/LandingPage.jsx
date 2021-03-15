import React, { useState } from "react";
import { pageTags } from "../utils/constants";
import Home from "./Home";
import About from "./About";
import MyCat from "./MyCat";
import Games from "./Games";
import Contact from "./Contact";

import "../sass/landingPage.css";
import ErrorPage from "./ErrorPage";

const LandingPage = () => {
  const [page, setPage] = useState(pageTags.home);

  return (
    <>
      <div className="untitled-landing">
        {page === pageTags.error && <ErrorPage />}
        {page === pageTags.home && <Home page={page} setPage={setPage} />}
        {page === pageTags.about && <About setPage={setPage} />}
        {page === pageTags.cat && <MyCat setPage={setPage} />}
        {page === pageTags.games && <Games setPage={setPage} />}
        {page === pageTags.contact && <Contact setPage={setPage} />}
      </div>
    </>
  );
};

export default LandingPage;
