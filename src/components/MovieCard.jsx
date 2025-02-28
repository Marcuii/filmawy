import { Link } from "react-router-dom";
import { BsFillPersonPlusFill, BsFillStarFill, BsCalendarDate, BsVectorPen } from "react-icons/bs";


const showCard = ({ cshow, setShow }) => {
  return (
    <Link
      to={{
        pathname: `/${cshow.media_type}/${cshow.id}`,
        state: cshow,
      }}
      onClick={() => setShow(cshow)}
    >
      <div className="flex flex-col p-4 bg-base-100 rounded-lg">
        <img
          src={`https://image.tmdb.org/t/p/w500/${cshow.poster_path}`}
          alt={cshow.title}
          className="rounded-lg"
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
