import "../App.css";
import { useState, useEffect } from "react";
import CommentListComponent from "../components/CommentListComponent";
import AppNavBarComponent from "../components/AppNavBarComponent";
import { Typography } from '@mui/material';
import { useParams } from "react-router-dom";


const Comments = (props: any) => {
    let params = useParams();
    
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`)
            .then((response) => response.json())
            .then((json) => {
        setComments(json); 
        setLoading(false)
        });
    });

	return (
        <>
            {/*<AppNavBarComponent user_id={params.user_id} current_page="posts"/>*/}
            <Typography variant='h3' sx={{ fontFamily: 'Comfortaa', color: '#EC7E31' }}>Comentários</Typography>
            {loading ? <Typography sx={{ fontFamily: 'Comfortaa', fontSize: 25, color: '#EC7E31' }}>Carregando...</Typography> : null}
            <CommentListComponent comments={comments}/>
        </>
    )
}

export default Comments