import { Outlet } from "react-router-dom";
import Nav from "./Components/Nav/Nav";

const MainLayout = () => {
    return (
        <div className="px-12 py-7 pt-4">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;