import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postsRequests} from "../../api/request/postsRequests";

const PostByCommentPage = () => {
    const {postById} = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(()=>{
        if(postById){

        postsRequests.getPostById(postById).then(({data})=> setPost({...data}))
        }
    },[postById])
    //if (!post) return null;
    return (
        <div style={{width:'100%', margin: '0 auto',
            background:'lightgray'}}>
            <div>postID: {postById}</div>
            <div>Title: {post.title}</div>
            <div>content: {post.body}</div>
        </div>
    );

};

export {PostByCommentPage};