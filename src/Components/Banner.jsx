import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero min-h-screen bg-base-200 mb-10">
      <div className="lg:flex gap-10 ">
        <div className="">
          <h1 className="text-5xl font-bold my-10 mt-10">Books to freshen up <br /> your bookshelf</h1>
          
          <Link to={'/listed'}><button className="btn bg-green-500">View The List</button></Link>
        </div>
        <div>
            <img src="https://i.ibb.co/V2ct5qN/pngwing-1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
