
const ListedShowBook = ({book}) => {
    const {  author, rating, bookName, tags, image, category, totalPages,publisher } = book;
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
                className="border rounded-2xl px-4 bg-gray-200 text-green-500 font-bold"
              >
                #{b}
                
              </button>
              
            ))}
            <p>location none </p>
          </div>
          <div className="flex justify-start border-b-2">
          <p>{publisher}</p>
          <p> pages: {totalPages}</p>
          </div>
    <div className="card-actions flex gap-4 ">
      <button className=" p-2 bg-blue-200 rounded-2xl border">category: {category}</button>
      <button className=" bg-orange-100 rounded-2xl border p-2">Rating : {rating}</button>
      <button className=" bg-green-500 rounded-2xl border p-2">View Details</button>
    </div>
  </div>
</div>
    );
};

export default ListedShowBook;