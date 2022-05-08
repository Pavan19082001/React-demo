import {Button} from "@mui/material";
import {DeleteIcon, SendIcon} from "@mui/icons-material";

function MaterialUI(){
    return(
        <div>
            <stack spacing = {4} direction="row">
            <Button variant="contained">contained</Button>
            <Button variant="outlined" disabled>outlined</Button>
            <Button variant="text">Text</Button>
            <Button varaint="contained" color="success">merge</Button>
            <Button variant="outlined" color="error">Error</Button>
            </stack>
            <Button variant="outlined" startIcon={<DeleteIcon/>}> Delete</Button>
            <Button variant="outlined" endIcon={<SendIcon/>}> save</Button>
        </div>

    )
}
export default MaterialUI;