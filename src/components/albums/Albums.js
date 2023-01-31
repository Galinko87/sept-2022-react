const Albums = ({albums}) => {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
        }}>
            {albums.map(item=>{
                const{id, title, userId} = item;
                return(
                    <div key={id} style={{
                    background:'lightgray'}
                    }>
                        <div>ID:{id}</div>
                        <div>title:{title}</div>
                        <div>userId:{userId}</div>

                    </div>
                    )}
                )};
        </div>
    )};

export {Albums};