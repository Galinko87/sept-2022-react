const Dog = ({dog, dispatch}) => {
    const {id, name} = dog;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <button onClick={()=>dispatch({type:'DELETE_DOG', payload:id})}>delete</button>
        </div>
    );
};

export {Dog};