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



export const getBooks2 = () => {
  let books2 = [];
  const storedBooks = localStorage.getItem("books2");
  if (storedBooks) {
    books2 = JSON.parse(storedBooks);
  }
  return books2;
};
export const saveBooksWishesList = (book) => {
  let books2 = getBooks2();
  const exist = books2.find((b) => b.id === book.id);
  if (exist) {
    return toast.error("Already Exist wishesList Listed Books!!");
  }
  books2.push(book);
  localStorage.setItem("books2", JSON.stringify(books2));
  toast.success(" WishList  Listed Books Successfully ");
};
