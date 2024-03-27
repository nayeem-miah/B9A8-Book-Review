
import { useEffect, useState } from "react";
import { getBooks } from "./LocalStorage/LocalStorage";
import ListedShowBook from "./ListedShowBook";


const ReadBooks = () => {
    // const books = useLoaderData();
    const [books1, setBooks] = useState([]);
    useEffect(() => {
        const storedBooks = getBooks();
        setBooks(storedBooks);
      }, []);

    
    // console.log(books1);
    return (
        <div className="">
           {books1.map((book) => (
          <ListedShowBook key={book.id} book={book}></ListedShowBook>
        ))}
        </div>
    );
};

export default ReadBooks;