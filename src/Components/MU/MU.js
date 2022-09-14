import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";


const MU = () => {
    const [state, setState] = useState('');

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField value={state} onChange={(e) => setState(e.target.value)}  id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField value={state} onChange={(e) => setState(e.target.value)} id="filled-basic" label="Filled" variant="filled" />
                <TextField value={state} onChange={(e) => setState(e.target.value)} id="standard-basic" label="Standard" variant="standard" />
                <Button variant="contained">Contained</Button>
            </Box>
        </>
    )
}

export default MU;