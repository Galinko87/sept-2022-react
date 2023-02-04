import css from './Header.module.css';
import {Link, NavLink} from "react-router-dom";
import {useAuthContext} from "../../hooks/UseAuthContext";

const Header = () => {
    const {user} = useAuthContext();
    return (
        <div className={css.Header}>

            <NavLink to={""}>home</NavLink>
            <NavLink to={"users"}>users</NavLink>
            <NavLink to={"posts"}>posts</NavLink>
            <NavLink to={"about"}>about</NavLink>
            {user&&
            <div>
                {user} <button>LogOut</button>
            </div>}
        </div>
    );
};

export {Header};