import { Link } from "react-router-dom";
import { BsFillPersonPlusFill, BsFillStarFill, BsCalendarDate, BsVectorPen } from "react-icons/bs";


const showCard = ({ cshow, setShow, catetegory }) => {
  return (
    <Link
      to={`/${cshow.media_type || catetegory}/${cshow.id}`}
      onClick={() => setShow(cshow)}
    >
      <div className="flex flex-col p-4 bg-base-100 rounded-lg group transition duration-300 hover:scale-105 hover:bg-base-200">
        <img
          src={cshow.poster_path ? `https://image.tmdb.org/t/p/w500/${cshow.poster_path}` : "https://static.vecteezy.com/system/resources/previews/011/860/693/non_2x/its-movie-time-vector.jpg"}
          alt={cshow.title}
          className="rounded-lg transition duration-300 group-hover:rotate-7"
        />
        <div className="flex flex-row justify-between mt-2 text-md">
          <div className="flex flex-col gap-1">
            <div className="flex flex-row items-center gap-1">
              <BsVectorPen className="text-accent"/>
              <p className="text-primary text-xl">{cshow.title || cshow.name}</p>
            </div>
            <div className="flex flex-row items-center gap-1">
              <BsCalendarDate  className="text-accent"/>
              <p className="text-secondary">{cshow.release_date || cshow.first_air_date}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-end gap-1">
            <div className="flex flex-row items-center gap-1">
              <p className="text-primary">{cshow.vote_average}</p>
              <BsFillStarFill className="text-accent"/>
            </div>
            <div className="flex flex-row items-center gap-1">
              <p className="text-primary">{cshow.vote_count} </p>
              <BsFillPersonPlusFill  className="text-accent"/>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default showCard;
