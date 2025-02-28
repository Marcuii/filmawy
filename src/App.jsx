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

  const [catetegory, setCategory] = useState('movie');
  const [currentCategory, setCurrentCategory] = useState({ name: "Popular Movies", value: "movie/popular" });

  const [shows, setShows] = useState([]);
  const [label, setLabel] = useState('Popular Movies');
  const [beforeFilter, setBeforeFilter] = useState([]);

  const [show, setShow] = useState({ media_type: 'movie', id: 334543 });

  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setGenres([]);
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
    setGenres([]);
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
    setGenres([]);
    fetch(`https://api.themoviedb.org/3/${show.media_type || catetegory}/${show.id}?api_key=95fb408a155045cae0a749c9c200ca66`)
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
    setGenres([]);
    setShow({})
    value.value[0] == "m" ? setCategory('movie') : setCategory('tv');
    setCurrentCategory(value);
    setLabel(value.name);
  }

  const setSearchResults = (value) => {
    setGenres([]);
    setSearchValue(value);
    setCounter(counter + 1);
    setLabel(`"${searchKey}"`);
  }

  const sortFunc = (sortID) => {
    let sortedShows = [...shows];
    const getTitle = (item) => item.title || item.name;
    const getReleaseDate = (item) => item.release_date || item.first_air_date;

    if (sortID == 1) {
      sortedShows.sort((a, b) => getTitle(a)?.localeCompare(getTitle(b)));
    }
    else if (sortID == 2) {
      sortedShows.sort((a, b) => getTitle(b)?.localeCompare(getTitle(a)));
    }
    else if (sortID == 3) {
      sortedShows.sort((a, b) => a.vote_average - b.vote_average);
    }
    else if (sortID == 4) {
      sortedShows.sort((a, b) => b.vote_average - a.vote_average);
    }
    else if (sortID == 5) {
      sortedShows.sort((a, b) => getReleaseDate(a)?.localeCompare(getReleaseDate(b)));
    }
    else if (sortID == 6) {
      sortedShows.sort((a, b) => getReleaseDate(b)?.localeCompare(getReleaseDate(a)));
    }
    setShows(sortedShows);
  }

  const putGenres = (id) => {
    genres.includes(id) ? setGenres(genres.filter(genre => genre !== id)) : setGenres([...genres, id]);
  }

  const filter = () => {
    setBeforeFilter(shows);
    let filteredShows = [...shows];
    if (genres.length == 0) {
      setShows(beforeFilter);
      return;
    } else {
      filteredShows = filteredShows.filter(show => {
        let showGenres = show.genre_ids;
        return genres.every(genre => showGenres.includes(genre));
      }
      );
      setShows(filteredShows);
    }
  }

  return (
    loggedIn ?
      <div className="bg-base-300 text-primary min-h-screen relative">
        <Navbar setSearchResults={setSearchResults} searchKey={searchKey} setSearchKey={setSearchKey} setCatResults={setCatResults} />
        <Routes>
          <Route path="*" element={<Home shows={shows} label={label} setShow={setShow} catetegory={catetegory} sortFunc={sortFunc} putGenres={putGenres} filter={filter} />} />
          <Route path={`/${show.media_type || catetegory}/${show.id}`} element={<MovieDetails show={show} catetegory={catetegory} setShow={setShow} />} />
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