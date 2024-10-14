import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate()

  return (
   
      <header>
        <div className="header-sides" onClick={()=> navigate('/sign-up')}>
         
        </div>

        <div className="header-center" onClick={()=> navigate('/')}>
          <h1 className="title">MyVcf</h1>
        </div>

        <div className="header-sides" onClick={()=> navigate('/sign-up')}>
          
        </div>
      </header>

       
      // <header>
      //   <div className="header-sides" onClick={()=> navigate('/sign-up')}>
      //     <img src="/gold-badge-left.png"></img>
      //   </div>

      //   <div className="header-center" onClick={()=> navigate('/')}>
      //     <img className="logo" src="/myVcard_logo.jpg"></img>
      //     <h2>MY VIRTUAL CARD</h2>
      //   </div>

      //   <div className="header-sides" onClick={()=> navigate('/sign-up')}>
      //     <img src="/gold-badge-right.png"></img>
      //   </div>
      // </header>

  );
};

export default Header;
