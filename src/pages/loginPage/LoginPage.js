import {useContext, useRef} from "react";
import {useAuthContext} from "../../hooks/UseAuthContext";
import {useLocation, useNavigate} from "react-router-dom";

const LoginPage = () => {
    const username = useRef();
    const {logIn} = useAuthContext();
    const navigate = useNavigate();
    const {state} = useLocation();
    const login = ()=>{
        logIn(username.current.value)
        navigate(state.pathname, {replace:true})
    }
    return (
        <div>
           <input type="text" placeholder={'username'} ref={username}/>
            <button onClick={()=>login()}>login</button>
        </div>
    );
};

export {LoginPage};