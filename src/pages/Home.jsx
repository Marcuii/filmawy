import {
  Button,
  Checkbox,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import { BsArrowDown, BsArrowUp, BsSliders } from "react-icons/bs";

const Home = ({ shows, label, setShow, catetegory, sortFunc, putGenres, filter }) => {
  const [sorts] = useState([
    { name: "Name", asc: true, code: 1 },
    { name: "Name", asc: false, code: 2 },
    { name: "Rating", asc: true, code: 3 },
    { name: "Rating", asc: false, code: 4 },
    { name: "Year", asc: true, code: 5 },
    { name: "Year", asc: false, code: 6 },
  ]);

  const [movieGenres] = useState([
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
    {
      id: 99,
      name: "Documentary",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10751,
      name: "Family",
    },
    {
      id: 14,
      name: "Fantasy",
    },
    {
      id: 36,
      name: "History",
    },
    {
      id: 27,
      name: "Horror",
    },
    {
      id: 10402,
      name: "Music",
    },
    {
      id: 9648,
      name: "Mystery",
    },
    {
      id: 10749,
      name: "Romance",
    },
    {
      id: 878,
      name: "Science Fiction",
    },
    {
      id: 10770,
      name: "TV Movie",
    },
    {
      id: 53,
      name: "Thriller",
    },
    {
      id: 10752,
      name: "War",
    },
    {
      id: 37,
      name: "Western",
    },
  ]);

  return (
    <div className="flex flex-col p-6">
      <div className="flex flex-row justify-between items-center mb-8">
        <h1 className="text-3xl">{label}</h1>
        <Menu>
          <MenuHandler>
            <Button className="p-2 bg-accent flex">
              <BsSliders />
            </Button>
          </MenuHandler>
          <MenuList className="flex flex-col text-center gap-2 text-primary bg-base-300 w-30">
            {sorts.map((sort, index) => (
              <MenuItem
                key={index}
                onClick={() => sortFunc(sort.code)}
                className="hover:bg-base-100 p-2 flex flex-row justify-between items-center rounded-3xl"
              >
                {sort.name} {sort.asc ? <BsArrowUp /> : <BsArrowDown />}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
      <ul className="flex text-2xl gap-2 flex-wrap justify-center items-center mb-8">
          Genres:
          {movieGenres.map((genre) => (
            <li key={genre.id} className="text-primary flex bg-accent p-2 rounded-2xl text-lg gap-1">
              <input type="checkbox" id={genre.id} onClick={() => putGenres(genre.id)} />
              <label htmlFor={genre.id}>{genre.name}</label>
            </li>
          ))}
          <Button onClick={filter} color="lightBlue" ripple="light" className="p-2 bg-base-100 flex hover:bg-base-200 hover:cursor-pointer">
            Filter
          </Button>
        </ul>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {shows.map((cshow) => (
          <MovieCard
            key={cshow.id}
            cshow={cshow}
            setShow={setShow}
            catetegory={catetegory}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
