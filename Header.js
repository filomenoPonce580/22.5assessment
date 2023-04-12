import React from "react";

function Header({ loggedIn, handleLoggedInClick, handleFontSizeIncrease }) {
  return (
    <React.Fragment>
      <button onClick={handleLoggedInClick}>
        {loggedIn ? "Log Out" : "Log In"}
      </button>
      <button onClick={handleFontSizeIncrease}> 
        Increase Font Size
      </button>
    </React.Fragment>
  );
}

export default Header;
