import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";

const Root = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <Header></Header>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;