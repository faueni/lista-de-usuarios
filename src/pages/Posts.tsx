import "../App.css";
import { useState, useEffect } from "react";
import PostListComponent from "../components/PostListComponent";
import { Typography } from '@mui/material';
import { useParams } from "react-router-dom";


const Posts = (props: any) => {
    let params = useParams();
    
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.user_id}/posts`)
            .then((response) => response.json())
            .then((json) => {
        setPosts(json); 
        setLoading(false)
        });
    });

	return (
        <>
            <Typography variant='h3' sx={{ fontFamily: 'Comfortaa', color: '#EC7E31' }}>Posts</Typography>
            {loading ? <Typography sx={{ fontFamily: 'Comfortaa', fontSize: 25, color: '#EC7E31' }}>Carregando...</Typography> : null}
            <PostListComponent posts={posts}/>
        </>
    )
}

export default Posts