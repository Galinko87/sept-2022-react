import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {PostsRequests} from "../../api/request/postsRequests";

const PostByCommentPage = () => {
    const {postById} = useParams();
    const [post, setPost] = useState(null);
    useEffect(()=>{
        if(postById){

        PostsRequests.getPostById(postById).then(({data})=> set)
        }
    })
    return (
        <div style={{
            background:'lightgray'}
        }>>
            <h1>comments</h1>
        </div>
    );
};

export {PostByCommentPage};