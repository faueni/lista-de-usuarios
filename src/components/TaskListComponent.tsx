import { Checkbox } from '@mui/material';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const TaskListComponent = (props:any) => {
    return (
        <FormGroup>
            {props.tasks.map((task: any) => (    
                <FormControlLabel control={
                    <Checkbox checked={task.completed} inputProps={{ 'aria-label': 'controlled' }} />
                } label={task.title} />
            ))}
        </FormGroup>
    );
}

export default TaskListComponent;
