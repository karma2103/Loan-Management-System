import { Grid, TextField,CardContent } from "@mui/material";

const PersonalInfromation =()=>{
    return(
        <CardContent sx={{ mt: -4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="CID No"
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
                        label="Gender"
                        margin="normal"
                        name="gender"
                        type="text"
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="Dzongkhag"
                        margin="normal"
                        name="dzo"
                        type="text"
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="Gewog"
                        margin="normal"
                        name="gewog"
                        type="text"
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="Village"
                        margin="normal"
                        name="village"
                        type="text"
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <TextField
                        fullWidth
                        label="Contact No"
                        margin="normal"
                        name="contact_no"
                        type="text"
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={3}>
                <TextField
                    fullWidth
                    label="Email"
                    margin="normal"
                    name="email"
                    type="text"
                    size="small"
                />
                </Grid>
            </Grid>
        </CardContent>
    )
}

export default PersonalInfromation;