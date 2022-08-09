import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CommentListComponent from './CommentListComponent';

const PostListComponent = (props: any) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {props.posts.map((post: any) => (    
            <>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >{post.title}
                        </Typography>
                    }
                    secondary={
                        <React.Fragment>
                        {post.body}
                        <CommentListComponent post_id={post.id}/>
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider component="li" />
            </>
        ))}
    </List>
  );
}

export default PostListComponent;