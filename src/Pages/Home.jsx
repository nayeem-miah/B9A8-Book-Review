import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Books from "../Components/Books";
// import Book from "../Components/Book";

const Home = () => {
    const books = useLoaderData();
    console.log(books);
    return (
        <div>
            <Banner></Banner>
            <Books books={books}
            ></Books>
        </div>
    );
};

export default Home;