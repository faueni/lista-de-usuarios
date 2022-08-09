import {useState, useEffect} from 'react';
import { Divider, Button, ListItem, ListItemText } from "@mui/material";
import { Container, List, Typography } from "@mui/material";
import React from 'react';

const CommentListComponent = (props: any) => {
  const [comments, setComments] = useState([]);
  const [enableComments, setEnableComments] = useState(true);

  const handleOpenComments = () => {
    setEnableComments(!enableComments);
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${props.post_id}/comments`)
    .then(response => response.json())
    .then(json => setComments(json))
  })

  return (
    <Container sx={{ padding: 3 }}>
        <Button variant="contained">
            <Typography 
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="white" onClick={handleOpenComments}>
            Ver Comentários
            </Typography>
        </Button>

        <List hidden={enableComments} sx={{ width: '100%', bgcolor: 'background.paper', paddingLeft: 5}}>
            {comments.map((comment) => (
                <>
                <ListItem alignItems="flex-start">
                    <ListItemText
                        primary={
                            <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >{comment.name}
                            </Typography>
                        }
                        secondary={
                            <React.Fragment>
                            {comment.body}
                            </React.Fragment>
                        }
                    />
                </ListItem>
                <Divider component="li" />
                </>
            ))}
        </List>

    </Container>
  );
}

export default CommentListComponent;