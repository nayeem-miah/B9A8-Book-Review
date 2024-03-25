import Book from "./Book";
import BookDetails from "./BookDetails";

const Books = ({ books }) => {
    
  //   console.log(books);
  return (
    <div>
        <h2 className="text-center font-bold text-3xl my-10">Books</h2>
        
        <BookDetails book={books}></BookDetails>
      <div className="grid grid-cols-3 gap-8">
        {books.map((book) => (
          <Book key={book.id} book={book}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
