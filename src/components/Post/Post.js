import {Link, useNavigate} from "react-router-dom";

const Post = ({post}) => {
    const navigate = useNavigate();
    const {id, userId, title} =post;
    return (
        <div>
            <div>
                <div>id: {id}</div>
                <div>userId: {userId}</div>
                <div>title: {title}</div>
                <button onClick={()=>navigate(id.toString(), {state:post})}>Detail</button>
                {/*<Link to={id.toString()} state={{...post}}>Posts Details</Link>*/}
            </div>
        </div>
    );
};

export {Post};