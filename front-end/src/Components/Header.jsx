import React from "react";
import {BiUserCircle} from 'react-icons/bi'


function Header() {
  return (
    <>
      <div className="nav flex">
        <h1>Startoon Labs</h1>
        <div className="profile-icon" >
          <p>Admin </p>
          <p><BiUserCircle style={{ width: '30px', height: '30px' }} /></p>
        </div>
      </div>
    </>
  );
}

export default Header;
