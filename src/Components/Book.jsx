import { FcRating } from "react-icons/fc";
import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const { id,author, rating, bookName,tags, image, category } = book;
  return (
    <div>
      <Link to={`/book/${id}`}
       className="card  bg-base-100  shadow-xl ">
        <figure className="bg-base-300 p-8">
          <img className="w-52 h-52" src={image} />
        </figure>
        <div className="card-body">
          <div className="flex justify-around">

          
            {/* <div className="flex justify-around">
            {buttons.map((b, index) => (
              <button
                key={index}
                className="border rounded-2xl px-4 bg-gray-200 text-green-500 font-bold"
              >
                {b}
              </button>
            ))}
          </div> */}

          
            {
                tags.map((b,index)=><button key={index} className="border rounded-2xl px-4 bg-gray-200 text-green-500 font-bold">#{b}</button>)
            }
          </div>
          <h2 className="card-title">{bookName}</h2>
          <p className="border-b-2 py-2">{author}</p>
          <div>
            <div className="flex justify-between">
              <p>{category}</p>
              <p className="flex items-center gap-2">
                <span>{rating}</span>
                <FcRating className="text-2xl "></FcRating>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
