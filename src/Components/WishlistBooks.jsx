import { useEffect, useState } from "react";
import { getBooks2 } from "./LocalStorage/LocalStorage";
import ListedShowBook from "./ListedShowBook";

const WishlistBooks = () => {
    const [books1, setBooks] = useState([]);
    useEffect(() => {
        const storedBooks = getBooks2();
        setBooks(storedBooks);
      }, []);
    return (
        <div className="">

            
           {books1.map((book) => (
          <ListedShowBook key={book.id} book={book}></ListedShowBook>
        ))}
        </div>
    );
};

export default WishlistBooks;