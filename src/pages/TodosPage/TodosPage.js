import {useEffect, useState} from "react";
import {todosRequest} from "../../api/request/todosRequest";
import {TodosList} from "../../components/TodosList/TodosList";

const TodosPage = () => {
    const [todosList, setTodosList] = useState([]);
    useEffect( ()=>{
        todosRequest.getAll().then(({data})=> setTodosList([...data]))
        }, []

    )
    return (
        <div style={{width:'100%'}}>
            <h1>TodosPage</h1>
            <TodosList todosList={todosList}/>
        </div>
    );
};

export {TodosPage};