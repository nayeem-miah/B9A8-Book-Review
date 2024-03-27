import { Link, useLoaderData, useParams } from "react-router-dom";
import { saveBooks, saveBooksWishesList } from "./LocalStorage/LocalStorage";

const BookDetails = () => {
  const bookDetails = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = bookDetails.find((b) => b.id === idInt);
  const {
    author,
    review,
    rating,
    totalPages,
    yearOfPublishing,
    publisher,
    bookName,
    tags,
    image,
    
    category,
  } = book;
//   console.log(book);
  const handleClickButton=(book) =>{
    // console.log(book);
    saveBooks(book);
  }
  const handleClickWishBook=(book) =>{
    // console.log(book);
    saveBooksWishesList(book);
  }
  return (
    <div className="hero min-h-[[calc(100vh-100px)]] mt-10 border justify-center ">
      <div className="lg:flex   gap-20">
        <div className="w-2/3 py-8 px-12  bg-base-200 ">
          <img src={image} className=" rounded-lg mx-auto shadow-2xl" />
        </div>
        <div className="w-full">
          <h1 className="lg:text-5xl text-2xl font-bold">{bookName}</h1>
          <p className="py-2 border-b-2">
            <span className="font-bold">By:</span>
            {author}
          </p>
          <p className="border-b-2 py-2">{category}</p>
          <p>
            <span className="font-bold">Review :</span>
            {review}
          </p>
          <div className="flex my-4 py-2 gap-4 border-b-2 items-center">
            <p className="font-bold">Tags:</p>
            <div>
            {tags.map((b, index) => (
              <button
                key={index}
                className="border rounded-2xl px-2 bg-gray-200 text-green-500 "
              >
                #{b}
              </button>
            ))}
            </div>
          </div>
          <p className="my-2">Number of Pages : {totalPages}</p>
          <p className="my-2">Publisher: {publisher}</p>
          <p className="my-2">Year of Publishing :{yearOfPublishing} </p>
          <p className="my-2">Rating: {rating}</p>

          <div className="flex  gap-8">
            <Link>
              <button onClick={()=>handleClickButton(book)} className="btn border-green-400 my-3">Read</button>
            </Link>
            <Link>
              <button onClick={()=>handleClickWishBook(book)} className="btn btn-secondary my-3">Wishlist</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
