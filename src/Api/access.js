
import axios from "axios";
    // const Api = process.env.REACT_APP_API_KEY;
  //login
  const login=({...crediential})=> {
  console.log(crediential);
    // return axios.post(`${Api}/user_login`, crenditial);
  };
  const access2=()=> {
    // console.log("crenditial2");
    // return axios.post(`${Api}/user_login`, crenditial);
  };

//   export default function logout() {
//     console.log("crenditial");
//     // return axios.post(`${Api}/user_login`, crenditial);
//   };

export  {login,access2};