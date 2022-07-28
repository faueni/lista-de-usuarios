import "../App.css";
import { useState, useEffect } from "react";
import TaskListComponent from "../components/TaskListComponent";
import { Typography } from '@mui/material';
import { useParams } from "react-router-dom";


const Tarefas = (props: any) => {
    let params = useParams();
    
    const [tarefas, setTarefas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.user_id}/todos`)
            .then((response) => response.json())
            .then((json) => {
        setTarefas(json); 
        setLoading(false)
        });
    });

	return (
        <>
            {loading ? <Typography sx={{ fontFamily: 'Comfortaa', fontSize: 25, color: '#EC7E31' }}>Carregando...</Typography> : null}
            <TaskListComponent tasks={tarefas}/>
        </>
    )
}

export default Tarefas