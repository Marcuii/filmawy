import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';
import NotAllowed from './pages/NotAllowed';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  const [searchKey, setSearchKey] = useState('');
  const [counter, setCounter] = useState(0);
  const [searchValue, setSearchValue] = useState('movie/popular');
  
  const [currentCategory, setCurrentCategory] = useState({ name: "Popular Movies", value: "movie/popular" });

  const [shows, setShows] = useState([]);
  const [label, setLabel] = useState('Popular Movies');

  const [show, setShow] = useState({media_type: 'movie', id: 334543});

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${currentCategory.value}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWZiNDA4YTE1NTA0NWNhZTBhNzQ5YzljMjAwY2E2NiIsIm5iZiI6MTc0MDUyNzY1NC44MDA5OTk5LCJzdWIiOiI2N2JlNTgyNmYzMmU5NTBjNGEzZDM4MmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1U-ECucqFGvsOxU8txSDLaIXDAA1Uw1lqUNsYTOYeBA'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setShows(json.results))
      .catch(err => console.error(err));
  }, [currentCategory]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${searchValue}`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWZiNDA4YTE1NTA0NWNhZTBhNzQ5YzljMjAwY2E2NiIsIm5iZiI6MTc0MDUyNzY1NC44MDA5OTk5LCJzdWIiOiI2N2JlNTgyNmYzMmU5NTBjNGEzZDM4MmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1U-ECucqFGvsOxU8txSDLaIXDAA1Uw1lqUNsYTOYeBA'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setShows(json.results))
      .catch(err => console.error(err));
  }, [counter]);


  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/${show.media_type}/${show.id}?api_key=95fb408a155045cae0a749c9c200ca66`)
      .then((res) => res.json())
      .then((data) => setShow(data));
  }, []);

  useEffect(() => {
    if (localStorage.getItem('in')) {
      setLoggedIn(true);
    }
  }
    , [localStorage.getItem('in'), loggedIn]);

  const setCatResults = (value) => {
    setCurrentCategory(value);
    setLabel(value.name);
  }

  const setSearchResults = (value) => {
    setSearchValue(value);
    setCounter(counter + 1);
    setLabel(`"${searchKey}"`);
  }

  return (
    loggedIn ?
      <div className="bg-base-300 text-primary min-h-screen relative">
        <Navbar setSearchResults={setSearchResults} searchKey={searchKey} setSearchKey={setSearchKey} setCatResults={setCatResults}/>
        <Routes>
          <Route path="*" element={<Home shows={shows} label={label} setShow={setShow}/>} />
          <Route path={`/${show.media_type}/${show.id}`} element={<MovieDetails show={show} />} />
        </Routes>
        <Footer />
      </div> :
      <div className="bg-base-300 text-primary min-h-screen">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="*" element={<NotAllowed />} />
        </Routes>
      </div>
  );
}

export default App;