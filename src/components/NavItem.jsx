import React, { useCallback } from "react";

const NavItem = ({ targetPage, setPage }) => {
  const handleOnClick = useCallback(() => {
    setPage(targetPage);
  }, [setPage]);

  return (
    <>
      <button className="navigation-item" onClick={handleOnClick}>
        {targetPage}
      </button>
    </>
  );
};

export default NavItem;
