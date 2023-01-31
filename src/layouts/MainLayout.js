import {SideBar} from "../components/sidebar/SideBar";
import './MainLayout.styles.css'
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div className={"main-container"}>
            <SideBar/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};