import {useNavigate} from "react-router-dom";

const Comments = ({comments}) => {
    const navigate = useNavigate()
    return (
        <div style={{display:'flex', flexDirection:'column', gap:10, height:500, overflowY:'scroll'}}>
            {comments.map(item=>{
                const {postId, id, name} = item;
                return(
                    <div key={id}>
                        <div>ID: {id}</div>
                        <div>PostId: {postId}</div>
                        <div>name: {name}</div>
                        <button onClick={()=> navigate(postId.toString())}>back to post</button>
                    </div>
                )
            })}
        </div>
    );
};

export {Comments};