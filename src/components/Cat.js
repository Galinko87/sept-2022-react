const Cat = ({cat, dispatch}) => {
    const {id, name} = cat;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <button onClick={()=>dispatch({type:'DELETE_CAT', payload:id})}>delete</button>
        </div>
    );
};

export {Cat};