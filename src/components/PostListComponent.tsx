import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';

const PostListComponent = (props: any) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {props.posts.map((post: any) => (    
            <>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={post.title}
                    secondary={
                        <React.Fragment>
                        {post.body}
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