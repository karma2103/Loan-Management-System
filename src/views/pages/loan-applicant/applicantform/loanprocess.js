import { Grid, TextField,CardContent } from "@mui/material";

const LoanProcess =()=>{
    return(
        <CardContent sx={{ mt: -4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="C No"
                        margin="normal"
                        name="cid"
                        type="text"
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="Full Name"
                        margin="normal"
                        name="name"
                        type="text"
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="DoB"
                        margin="normal"
                        name="dob"
                        type="text"
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="DoB"
                        margin="normal"
                        name="dob"
                        type="text"
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="DoB"
                        margin="normal"
                        name="dob"
                        type="text"
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="DoB"
                        margin="normal"
                        name="dob"
                        type="text"
                        size="small"
                    />
                </Grid>
            </Grid>
        </CardContent>
    )
}

export default LoanProcess;