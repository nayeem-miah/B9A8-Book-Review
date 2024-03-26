import Book from "./Book";


const Books = ({ books }) => {
    
  //   console.log(books);
  return (
    <div>
        <h2 className="text-center font-bold text-3xl my-10">Books</h2>
        
        
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
