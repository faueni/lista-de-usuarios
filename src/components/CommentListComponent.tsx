import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const CommentListComponent = (props: any) => {
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {props.comments.map((comment: any) => (    
            <>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >{comment.email}
                        </Typography>
                    }
                    secondary={
                        <React.Fragment>
                        {comment.name}
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

export default CommentListComponent;