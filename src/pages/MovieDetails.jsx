import React, { use, useEffect, useState } from 'react';
import { BsFillPersonPlusFill, BsFillStarFill, BsFillPeopleFill, BsClock, BsStack } from "react-icons/bs";
import MovieCard from '../components/MovieCard';


const MovieDetails = ({ show, catetegory, setShow }) => {
  let type = show.media_type || catetegory;

  const [details, setDetails] = useState({});

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${show.media_type || catetegory}/${show.id}?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWZiNDA4YTE1NTA0NWNhZTBhNzQ5YzljMjAwY2E2NiIsIm5iZiI6MTc0MDUyNzY1NC44MDA5OTk5LCJzdWIiOiI2N2JlNTgyNmYzMmU5NTBjNGEzZDM4MmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1U-ECucqFGvsOxU8txSDLaIXDAA1Uw1lqUNsYTOYeBA'
      }
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [show]);

  const [cast, setCast] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${show.media_type || catetegory}/${show.id}/credits?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWZiNDA4YTE1NTA0NWNhZTBhNzQ5YzljMjAwY2E2NiIsIm5iZiI6MTc0MDUyNzY1NC44MDA5OTk5LCJzdWIiOiI2N2JlNTgyNmYzMmU5NTBjNGEzZDM4MmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1U-ECucqFGvsOxU8txSDLaIXDAA1Uw1lqUNsYTOYeBA'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setCast(json.cast))
      .catch(err => console.error(err));
  }, [show]);

  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${show.media_type || catetegory}/${show.id}/recommendations?language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWZiNDA4YTE1NTA0NWNhZTBhNzQ5YzljMjAwY2E2NiIsIm5iZiI6MTc0MDUyNzY1NC44MDA5OTk5LCJzdWIiOiI2N2JlNTgyNmYzMmU5NTBjNGEzZDM4MmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1U-ECucqFGvsOxU8txSDLaIXDAA1Uw1lqUNsYTOYeBA'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setRecommendations(json.results))
      .catch(err => console.error(err));
  }, [show]);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${show.media_type || catetegory}/${show.id}/reviews?language=en-US&page=1`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWZiNDA4YTE1NTA0NWNhZTBhNzQ5YzljMjAwY2E2NiIsIm5iZiI6MTc0MDUyNzY1NC44MDA5OTk5LCJzdWIiOiI2N2JlNTgyNmYzMmU5NTBjNGEzZDM4MmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1U-ECucqFGvsOxU8txSDLaIXDAA1Uw1lqUNsYTOYeBA'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setReviews(json.results))
      .catch(err => console.error(err));
  }, [show]);

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/${show.media_type || catetegory}/${show.id}/videos?language=en-US`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NWZiNDA4YTE1NTA0NWNhZTBhNzQ5YzljMjAwY2E2NiIsIm5iZiI6MTc0MDUyNzY1NC44MDA5OTk5LCJzdWIiOiI2N2JlNTgyNmYzMmU5NTBjNGEzZDM4MmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.1U-ECucqFGvsOxU8txSDLaIXDAA1Uw1lqUNsYTOYeBA'
      }
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setVideos(json.results))
      .catch(err => console.error(err));

  }, [show]);

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
      <div className="details flex flex-wrap w-full justify-evenly items-center gap-5">
        <img src={show.poster_path ? `https://image.tmdb.org/t/p/w500/${show.poster_path}` : "https://static.vecteezy.com/system/resources/previews/011/860/693/non_2x/its-movie-time-vector.jpg"} alt="" className="rounded-3xl" />
        <div className="flex flex-col gap-7 justify-center items-start mt-5 bg-base-100 rounded-3xl p-8 lg:w-1/2">
          <h1 className='text-lg p-3 badge badge-accent'>{show.media_type && show.media_type.toUpperCase() || catetegory.toUpperCase()}</h1>
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
          {type === 'movie' ?
            <div className="flex flex-row gap-2 items-center text-2xl">
              <BsClock className="text-accent" />
              <p>{details.runtime} Min</p>
            </div> :
            <div className="flex flex-row gap-2 items-center text-2xl">
              <BsStack className="text-accent" />
              <p>{details.number_of_episodes} Episodes</p>
            </div>
          }
          <div className="flex flex-row gap-2 items-center text-2xl">
            <BsFillPeopleFill className="text-accent" />
            <p>{show.popularity} Views</p>
          </div>
          <div className="flex flex-row gap-2 items-center text-2xl">
            <BsFillStarFill className="text-accent" />
            <p>{show.vote_average} Stars</p>
          </div>
          <div className="flex flex-row gap-2 items-center text-2xl">
            <BsFillPersonPlusFill className="text-accent" />
            <p>{show.vote_count} Votes</p>
          </div>
          <div className='flex flex-col gap-2 '>
            <h1 className='text-2xl font-bold'>Overview:</h1>
            <p className="text-lg">{show.overview}</p>
          </div>
        </div>
      </div>
      <div className='cast flex flex-col gap-5 p-8 w-full bg-base-200 rounded-3xl justify-center items-center'>
        <h1 className='text-2xl w-full text-start font-bold'>Cast:</h1>
        {cast.length === 0 ? <p className='text-2xl'>No Cast Found</p> :
        <div className='flex flex-row gap-5 w-full p-1 sm:px-4 overflow-x-scroll'>
          {cast.map((actor) => (
            <div key={actor.id} className='flex flex-col bg-accent p-2 min-w-fit rounded-2xl gap-2 items-center hover:scale-105 transition duration-300'>
              <img
                src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : "https://t3.ftcdn.net/jpg/01/65/63/94/360_F_165639425_kRh61s497pV7IOPAjwjme1btB8ICkV0L.jpg"}
                alt={actor.name}
                className='rounded-lg w-40'
              />
              <p className='text-lg p-2 bg-base-300 rounded-2xl'>{actor.name}</p>
            </div>
          ))}
        </div>}
      </div>
      <div className='reviews flex flex-col gap-5 p-8 w-full bg-base-100 rounded-3xl justify-start items-center'>
        <h1 className='text-2xl w-full text-start font-bold'>Reviews:</h1>
        {reviews.length === 0 ? <p className='text-2xl'>No Reviews Found</p> :
        <div className='flex flex-col gap-5 w-full p-1 sm:p-4 max-h-[70vh] overflow-y-scroll'>
          {reviews.map((review) => (
            <div key={review.id} className='flex flex-col gap-2 bg-base-300 p-4 rounded-2xl'>
              <div className='flex flex-row gap-2 items-center'>
                {review.author_details.avatar_path ? <img src={`https://image.tmdb.org/t/p/w500/${review.author_details.avatar_path}`} alt="" className='w-20 rounded-full' /> : <BsFillPersonPlusFill className='text-5xl text-accent' />}
                <p className='text-lg font-bold'>{review.author}</p>
                <p>{review.author_details.rating}</p>
                <BsFillStarFill className='text-yellow-500'></BsFillStarFill>
              </div>
              <p className='text-lg'>{review.content}</p>
            </div>
          ))}
        </div>}
      </div>
      <div className='recommendations flex flex-col gap-5 p-8 w-full bg-base-200 rounded-3xl justify-start items-center'>
        <h1 className='text-2xl w-full text-start font-bold'>Recommendations:</h1>
        {recommendations.length === 0 ? <p className='text-2xl'>No Recommendations Found</p> :
        <div className='flex flex-row gap-5 w-full p-1 sm:p-4  overflow-x-scroll'>
          {recommendations.map((recommendation) => (
            <MovieCard key={recommendation.id} cshow={recommendation} setShow={setShow} catetegory={catetegory} />
          ))}
        </div>}
      </div>
      <div className='trailers flex flex-col gap-5 p-8 w-full bg-base-100 rounded-3xl justify-start items-center'>
        <h1 className='text-2xl w-full text-start font-bold'>Trailers:</h1>
        {videos.length === 0 ? <p className='text-2xl'>No Trailers Found</p> :
        <div className='flex flex-wrap gap-5 w-full p-1 sm:p-8 pb-0 max-h-[70vh] overflow-y-scroll'>
          {videos.map((video) => (
            <iframe
              key={video.id}
              className='rounded-2xl w-full h-80'
              src={`https://www.youtube.com/embed/${video.key}`}
              title={video.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ))}
        </div>}
      </div>
    </div>
  );
};

export default MovieDetails;