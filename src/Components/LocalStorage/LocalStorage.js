import { toast } from "react-toastify";
export const getBooks = () => {
  let books = [];
  const storedBooks = localStorage.getItem("books");
  if (storedBooks) {
    books = JSON.parse(storedBooks);
  }
  return books;
};


export const saveBooks = (book) => {
  let books = getBooks();
  const exist = books.find((b) => b.id === book.id);
  if (exist) {
    return toast.error("Already Exist Listed read Books!!");
  }
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  toast.success("Listed read Books Successfully ");
};
export const saveBooksWishesList = (book) => {
  let books = getBooks();
  const exist = books.find((b) => b.id === book.id);
  if (exist) {
    return toast.error("Already Exist wishesList Listed Books!!");
  }
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  toast.success(" WishList  Listed Books Successfully ");
};
