import {User} from "../User/User";
import {useEffect, useState} from "react";
import axios from "axios";
import {axiosService} from "../../services/axiosService";
import {userService} from "../../services/userService";

const Users = () => {
    const [users, setUsers] =useState([]);
    const [count, setCount] = useState(0);
    const [userDetails, setUserDetails] = useState(null);

    useEffect(()=>{
    userService.getAll.then(value => value.data).then(value=>setUsers([...value]))
    }, [count])

    return (
        <div>
            <h1>UserDetails</h1>
            {userDetails && <User user={userDetails}/> }

            <hr/>

            <h1>Users:</h1>
            {/*<button onClick={()=> setCount(prevState => prevState+1)}>click</button>*/}
            {users.map(user=> <User key={user.id} user={user} setUserDetails={setUserDetails} />)}
        </div>
    );
};

export {Users};