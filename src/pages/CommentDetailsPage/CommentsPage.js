import {useEffect, useState} from "react";
import {commentsRequest} from "../../api/request/commentsRequest";
import {Comments} from "../../components/comments/Comments";

const CommentsPage = () => {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        commentsRequest.getAll().then(({data})=> setComments([...data]))
    },[])
    return (
        <div  style={{
            background:'lightgray'}
        }>
            <h1>comment Details</h1>
            <hr/>
                <Comments comments={comments}/>
            <hr/>
        </div>
    );
};

export {CommentsPage};