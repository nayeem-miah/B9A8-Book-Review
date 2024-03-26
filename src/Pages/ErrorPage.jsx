import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className=" justify-center py-52 px-96 mx-auto items-center">
            <h2 className="text-5xl py-5 font-bold">Oops!!</h2>
            <p>error this page, 404 route/not found page </p>
            <Link to='/'
            className="underline hover:text-blue-500 text-2xl"
            >Go back 
            </Link>
        </div>
    );
};

export default ErrorPage;