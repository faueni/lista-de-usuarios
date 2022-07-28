import "../App.css";

import { Checkbox, Typography } from '@mui/material';

const Tarefas = (props: any) => {
  
	return (

        <Checkbox
            checked={true}
            inputProps={{ 'aria-label': 'controlled' }}
        />

    )
}

export default Tarefas