import React, { useEffect, useState } from "react";
import { AiOutlineLogout } from 'react-icons/ai';
import { useNavigate, useParams } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

import logo from '../assets/logo.png';
import { client } from '../client';
import { userQuery } from "../utils/data";
import { fetchUser } from '../utils/fetchUser';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  let custom = 'flex';

  const checkUser = () => {
    const user = fetchUser();

    if(user) {
      custom = 'flex';
      return custom;
    } else {
      custom = 'hidden';
      return custom;
    }
  }
  

  const logout = () => {
    localStorage.clear();

    navigate('/login');
  }

  return (
    <>
      <nav className={`relative md:${checkUser()} hidden flex-wrap items-center justify-between px-2 bg-gradient-to-r from-black to-red-500 mb-3`} style={{ height: '5.5rem' }}>
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <img src={logo} alt='logo' className='w-full' />
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center pb-25 my-auto" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <p className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {user?.googleId === user?._id && (
                <GoogleLogout
              clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
              render={(renderProps) => (
                <button
                type='button'
                className='bg-black p-2 rounded-full cursor-pointer outline-none shadow-md'
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                >
                  <p className="p-1 text-white" >Logout</p>
                </button>
              )}    
              onLogoutSuccess={logout}
              cookiePolicy='single_host_origin'
            />
              )}
            </p>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;