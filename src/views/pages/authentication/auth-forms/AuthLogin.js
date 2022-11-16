import { useContext, useState } from "react";

// material-ui
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";

// project imports
import useScriptRef from "hooks/useScriptRef";
import AnimateButton from "ui-component/extended/AnimateButton";

// assets
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

//auth
import AuthContext from "../../../../contexts/JWTAuthContexts";
import MainCard from "ui-component/cards/MainCard";

//loding button
import { LoadingButton } from '@mui/lab';

//loginFun
import  login  from "../../../../Api/access";
import { useNavigate } from "react-router";
// ============================|| FIREBASE - LOGIN ||============================ //

const FirebaseLogin = ({ ...others }) => {
  const theme = useTheme();
  // Forgot Password
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const navigate = useNavigate();
  const scriptedRef = useScriptRef();
  const [checked, setChecked] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const { setAuth } = useContext(AuthContext);
  
  const handleClick = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const userlogin = (user_id, password) => {
    const crediential = { user_id, password};
    login(crediential).then((response) => {
      if (!response.status === 200) throw new Error(response.status);
      else {
        setAuth(response["data"].access_token);
        navigate("/Lms/dashboard");
      }
    });
  };

  return (
    <>
      <Grid container direction="column" justifyContent="center" spacing={2}>
        <Grid
          item
          xs={12}
          container
          alignItems="center"
          justifyContent="center"
        >
          <Box sx={{ mb: 2, mt: -5 }}>
            <Typography variant="subtitle1">
              Sign in with user_id address
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Formik
        initialValues={{
          user_id: "",
          password: "",
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          user_id: Yup.string().max(255).required("user is required"),
          password: Yup.string().max(255).required("Password is required"),
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          try {
            if (scriptedRef.current) {
              setStatus({ success: true });
              userlogin(values.user_id, values.password);
              setSubmitting(false);
            }
          } catch (err) {
            console.error(err);
            if (scriptedRef.current) {
              setStatus({ success: false });
              setErrors({ submit: err.message });
              setSubmitting(false);
            }
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values,
        }) => (
          <form noValidate onSubmit={handleSubmit} {...others}>
            <FormControl
              fullWidth
              error={Boolean(touched.user_id && errors.user_id)}
              sx={{ ...theme.typography.customInput }}
            >
              <InputLabel htmlFor="outlined-adornment-user_id-login">
                User Name
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-user_id-login"
                type="text"
                value={values.user_id}
                name="user_id"
                onBlur={handleBlur}
                onChange={handleChange}
                label="User Name"
                size="small"
              />
              {touched.user_id && errors.user_id && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-user_id-login"
                >
                  {errors.user_id}
                </FormHelperText>
              )}
            </FormControl>

            <FormControl
              fullWidth
              error={Boolean(touched.password && errors.password)}
              sx={{ ...theme.typography.customInput }}
            >
              <InputLabel htmlFor="outlined-adornment-password-login">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password-login"
                type={showPassword ? "text" : "password"}
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                      size="large"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                inputProps={{}}
              />
              {touched.password && errors.password && (
                <FormHelperText
                  error
                  id="standard-weight-helper-text-password-login"
                >
                  {errors.password}
                </FormHelperText>
              )}
            </FormControl>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={1}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(event) => setChecked(event.target.checked)}
                    name="checked"
                    color="primary"
                  />
                }
                label="Remember me"
              />
              <Typography
                variant="subtitle1"
                color="secondary"
                sx={{ textDecoration: "none", cursor: "pointer" }}
                onClick={handleClick("body")}
              >
                Forgot Password?
              </Typography>
              <Dialog
                open={open}
                // onClose={handleClose}
                scroll={scroll}
                sx={{
                  "& .MuiDialog-container": {
                    "& .MuiPaper-root": {
                      maxWidth: "100%",
                    },
                  },
                }}
              >
                <DialogContent sx={{ width: "500px" }}>
                  <DialogContentText>
                    <MainCard title="Forgot Password">
                      <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                          <TextField
                            fullWidth
                            label="user_id Address"
                            name="name"
                            type="text"
                            autoFocus
                          />
                        </Grid>
                      </Grid>
                    </MainCard>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} variant="outlined" color="info">
                    Cancel
                  </Button>

                  <Button type="submit" variant="outlined" color="secondary">
                    Submit
                  </Button>
                </DialogActions>
              </Dialog>
            </Stack>
            {errors.submit && (
              <Box sx={{ mt: 3 }}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              <AnimateButton>
                <LoadingButton 
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Sign in
                </LoadingButton>
              </AnimateButton>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default FirebaseLogin;
