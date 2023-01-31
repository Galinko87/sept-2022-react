const TodosList = ({todosList}) => {
    return (
        <div>
            {todosList.map(item=>
                <div key={item.id} style={{display:'flex', flexDirection:'column', gap:10, background:'silver'}}>
                    <div>
                    <div>userId: {item.userId}</div>
                    <div>ID: {item.id}</div>
                    <div>title: {item.title}</div>
                    <div>status: {item.completed ? 'Completed': 'Not done yet'}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export {TodosList};