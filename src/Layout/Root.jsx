import { Outlet } from "react-router-dom";
import Header from "../Component/HeaderSection/Header";

const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Root;