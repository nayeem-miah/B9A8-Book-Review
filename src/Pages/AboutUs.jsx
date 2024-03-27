import { useLoaderData } from "react-router-dom";

import ListedShowBook from "../Components/ListedShowBook";

const AboutUs = () => {
    const data = useLoaderData();
    return (
        <div>
        <h2 className="text-center font-bold text-3xl my-10">About Books </h2>
        <p className="text-center mb-10">Reading books is extremely important. If you read books avidly, apparently, you obtain lots of good information. As a result, you become knowledgeable.
        Reading books is completely overlooked by most people across the world. Most adults don’t read because they are unaware of the essence of reading. Countless people stop reading books by the time they complete high school, never to open a book again. Unfortunately, school books are not that informative because formal education is very deficient. Real knowledge is found in bookshops.</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {
        data.slice(0,4).map(book => (<ListedShowBook key={book.id} book={book}></ListedShowBook>))
        }
      </div>
    </div>
    );
};

export default AboutUs;