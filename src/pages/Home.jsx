import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { Button, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";

const Home = ({ shows, label, setShow }) => {
  return (
    <div className="flex flex-col p-6">
      <div className="flex flex-wrap justify-between items-center">
      </div>
      <div>
        <h1 className="text-3xl mb-6">{label }</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {shows.map((cshow) => (
            <MovieCard key={cshow.id} cshow={cshow} setShow={setShow} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
