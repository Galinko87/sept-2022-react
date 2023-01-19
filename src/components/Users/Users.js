import {User} from "../User/User";
import {useEffect, useState} from "react";
import axios from "axios";

const Users = () => {
    const [users, setUsers] =useState([]);
    const [count, setCount] = useState(0);
    useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/users').then(value => value.data).then(value=>setUsers([...value]))


    }, [count])
    return (
        <div>
            <button onClick={()=> setCount(prevState => prevState+1)}>click</button>
            {users.map(user=> <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};