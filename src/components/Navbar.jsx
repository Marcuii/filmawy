import { Link } from 'react-router-dom';
import React from 'react';
import { useEffect, useState } from 'react';
import {
  Collapse,
  IconButton,
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const Navbar = ({ setSearchResults, searchKey, setSearchKey, setCatResults }) => {
  const [moviesCategory] = useState([
    { name: "Popular Movies", value: "movie/popular" },
    { name: "Top Rated Movies", value: "movie/top_rated" },
    { name: "Now Playing Movies", value: "movie/now_playing" },
    { name: "Upcoming Movies", value: "movie/upcoming" },
  ]);
  const [seriesCategory] = useState([
    { name: "Popular TV shows", value: "tv/popular" },
    { name: "Top Rated TV shows", value: "tv/top_rated" },
    { name: "On The Air TV shows", value: "tv/on_the_air" },
    { name: "Airing Today TV shows", value: "tv/airing_today" },
  ]);

  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  function handleLogout() {
    localStorage.removeItem('in');
    window.location.href = '/login';
  }

  return (
    <nav className="p-4 bg-base-100 w-full flex flex-wrap">
      <div className="w-screen flex flex-wrap justify-between items-center">
        <Link to="/movie/popular" className="text-2xl font-bold">
          <button onClick={() => { setCatResults({ name: "Popular Movies", value: "movie/popular" }) }}>
            Filmawy
          </button>
        </Link>
        <Menu>
          <MenuHandler>
            <Button className='p-2 bg-accent hidden lg:flex'>Movies</Button>
          </MenuHandler>
          <MenuList className='flex flex-col text-center gap-2 text-primary bg-base-300'>
            {moviesCategory.map((category, index) => (
              <MenuItem key={index} onClick={() => setCatResults(category)} className='hover:bg-base-100 p-2'>
                <Link to={`/${category.value}`}>
                  {category.name}
                </Link></MenuItem>
            ))}
          </MenuList>
        </Menu>
        <Menu>
          <MenuHandler>
            <Button className='p-2 bg-neutral hidden lg:flex'>Series</Button>
          </MenuHandler>
          <MenuList className='flex flex-col text-center gap-2 text-primary bg-base-300'>
            {seriesCategory.map((category, index) => (
              <MenuItem key={index} onClick={() => setCatResults(category)} className='hover:bg-base-100 p-2'>
                <Link to={`/${category.value}`}>
                  {category.name}
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
        <div className="relative hidden lg:flex bg-base-300 rounded-lg">
          <input type="text" placeholder="Search" className="p-2 rounded-lg w-full" onChange={(e) => { setSearchKey(e.target.value) }} />
          <Link to={`/search/${encodeURI(searchKey)}`} className='absolute right-1 top-2'>
            <button disabled={searchKey ? false : true} onClick={() => { setSearchResults("search/multi?query=" + encodeURI(searchKey) + "&include_adult=false&language=en-US&page=1") }} className="hover:cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </button>
          </Link>
        </div>
        <div className='text-xl hidden lg:flex flex-row gap-2'>
          <p>Welcome</p>
          <p className='text-accent font-semibold'>{localStorage.getItem('name')}</p>
        </div>
        <label className="swap swap-rotate hidden lg:flex">
          <input type="checkbox" className="theme-controller" value="business" />
          <svg
            className="swap-off h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>
          <svg
            className="swap-on h-7 w-7 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <button onClick={handleLogout} className="bg-primary text-primary-content p-3 rounded-2xl hidden lg:flex">Logout</button >
        <IconButton
          variant="text"
          className="text-primary flex justify-center items-center lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container flex flex-col justify-between items-center gap-7 mt-5">
          <p className="text-xl">Welcome <span className='text-accent'>{localStorage.getItem('name')}</span></p>
          <Menu>
            <MenuHandler>
              <Button className='p-2 bg-accent'>Movies</Button>
            </MenuHandler>
            <MenuList className='flex flex-col text-center gap-2 text-primary bg-base-300'>
              {moviesCategory.map((category, index) => (
                <MenuItem key={index} onClick={() => setCatResults(category)} className='hover:bg-base-100 p-2'>
                  <Link to={`/${category.value}`}>
                    {category.name}
                  </Link></MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Menu>
            <MenuHandler>
              <Button className='p-2 bg-neutral'>Series</Button>
            </MenuHandler>
            <MenuList className='flex flex-col text-center gap-2 text-primary bg-base-300'>
              {seriesCategory.map((category, index) => (
                <MenuItem key={index} onClick={() => setCatResults(category)} className='hover:bg-base-100 p-2'>
                  <Link to={`/${category.value}`}>
                    {category.name}
                  </Link>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <div className="relative flex lg:hidden bg-base-300 rounded-lg">
            <input type="text" placeholder="Search" className="p-2 rounded-lg w-full" onChange={(e) => { setSearchKey(e.target.value) }} />
            <Link to={`/search/${encodeURI(searchKey)}`} className='absolute right-1 top-2'>
              <button disabled={searchKey ? false : true} onClick={() => { setSearchResults("search/multi?query=" + encodeURI(searchKey) + "&include_adult=false&language=en-US&page=1") }} className="hover:cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
              </button>
            </Link>
          </div>
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" value="business" />
            <svg
              className="swap-off h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-on h-7 w-7 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path
                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
          <button onClick={handleLogout} className="bg-primary text-primary-content p-3 rounded-2xl flex lg:hidden">Logout</button >
        </div>
      </Collapse>
    </nav>
  );
};

export default Navbar;