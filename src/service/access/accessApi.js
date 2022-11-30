const Api = "http://127.0.0.1:8000/api/";
export default Login = async () => {
  try {
    let response = await axios.post(`${Api}login`, {
      user_name,
      password,
    });
    response
      .then((data) => {
        const { accessToken } = response.data.access_token;
        setAuth({ user_name, password, accessToken });
      })
      .then((response) => {
        if (response.data.payload.user_status === "inActive") {
          navigate("/");
        }
      });
  } catch (error) {}
};
