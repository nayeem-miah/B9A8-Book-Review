import { IoLocationOutline } from "react-icons/io5";
import { IoIosContacts } from "react-icons/io";
import { MdRestorePage } from "react-icons/md";
import PropTypes from 'prop-types'; 
import { Link } from "react-router-dom";
const ListedShowBook = ({book}) => {
    const {  id,author, rating, bookName, tags, image, category, totalPages,publisher,yearOfPublishing } = book;
    return (
        <div className="card  card-side bg-base-100 shadow-xl border mb-10">
  <figure className=""><img src={image} alt=""/></figure>
  <div className="card-body">
    <h2 className="card-title text-3xl">{bookName}</h2>
    <p>By: {author}</p>

    <div className="flex  gap-6">
            {tags.map((b, index) => (
              <button
                key={index}
                className="border rounded-2xl lg:px-4 px-1 bg-gray-200 text-green-500 font-bold"
              >
                #{b}
                
              </button>
              
            ))}
            <p className="flex items-center"><IoLocationOutline className="text-2xl"></IoLocationOutline> Year of Publishing: {yearOfPublishing} </p>
          </div>
          <div className="flex justify-start border-b-2">
          <p className="flex items-center gap-2"><IoIosContacts></IoIosContacts> {publisher}</p>
          <p className="flex items-center gap-2"><MdRestorePage></MdRestorePage> pages: {totalPages}</p>
          </div>
    <div className="card-actions flex gap-4 ">
      <button className=" p-2 bg-blue-200 rounded-2xl border">category: {category}</button>
      <button className=" bg-orange-100 rounded-2xl border p-2">Rating : {rating}</button>
      <Link to={`/book/${id}`} className=" bg-green-500 rounded-2xl border p-2">View Details</Link>
    </div>
  </div>
</div>
    );
};
ListedShowBook.propTypes={
  book:PropTypes.object.isRequired,
}

export default ListedShowBook;