import React, { useState } from 'react';
import { BsFillPersonPlusFill, BsFillStarFill, BsFillPeopleFill } from "react-icons/bs";


const MovieDetails = ({ show }) => {
  const [movieGenres] = useState([
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }]);

  const [seriesGenres] = useState([
    {
      "id": 10759,
      "name": "Action & Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 10762,
      "name": "Kids"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10763,
      "name": "News"
    },
    {
      "id": 10764,
      "name": "Reality"
    },
    {
      "id": 10765,
      "name": "Sci-Fi & Fantasy"
    },
    {
      "id": 10766,
      "name": "Soap"
    },
    {
      "id": 10767,
      "name": "Talk"
    },
    {
      "id": 10768,
      "name": "War & Politics"
    },
    {
      "id": 37,
      "name": "Western"
    }
  ]);

  return (
    <div className="flex flex-col w-full gap-5 p-6">
      <div className="flex flex-wrap w-full justify-evenly items-center gap-5">
        <img src={`https://image.tmdb.org/t/p/w500/${show.poster_path}`} alt="" className="rounded-3xl" />
        <div className="flex flex-col gap-10 justify-center items-start mt-5">
          <div className="flex flex-row gap-2 items-center">
            <h1 className="text-3xl text-primary font-bold">{show.title || show.name}</h1>
            <p className="text-xl">({show.release_date || show.first_air_date})</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className='text-2xl font-bold'>Genres:</h1>
            <div className='flex flex-wrap text-center gap-2'>
              {show.title ? movieGenres.filter((genre) => show.genre_ids.includes(genre.id)).map((genre) => (
                <p key={genre.id} className="text-lg p-2 bg-accent rounded-2xl">{genre.name}</p>
              )) : seriesGenres.filter((genre) => show.genre_ids.includes(genre.id)).map((genre) => (
                <p key={genre.id} className="text-lg p-2 bg-accent rounded-2xl">{genre.name}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-row gap-2 items-center text-3xl">
            <BsFillPeopleFill className="text-accent"/>
            <p>{show.popularity}</p>
          </div>
          <div className="flex flex-row gap-2 items-center text-3xl">
            <BsFillStarFill className="text-accent"/>
            <p>{show.vote_average}</p>
          </div>
          <div className="flex flex-row gap-2 items-center text-3xl">
            <BsFillPersonPlusFill  className="text-accent"/>
            <p>{show.vote_count}</p>
          </div>
        </div>
          
      </div>
      <div className='flex flex-col gap-5 p-8'>
          <h1 className='text-2xl font-bold'>Overview:</h1>
            <p className="text-lg">{show.overview}</p>

          </div>
    </div>
  );
};

export default MovieDetails;