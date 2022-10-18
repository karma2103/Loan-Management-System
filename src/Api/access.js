
import axios from "axios";

import Config from 'config';
  //login
  const login= async({...crediential})=> {
    console.log(Config.API_KEY);
     return await axios.post(`${Config.API_KEY}/login`,crediential);
  };
 
  const registration = ({...userDetails })=> {
    // return axios.post(`${Api}/user-registration`, userDetails);
  };
  
  const access2=()=> {
    // console.log("crenditial2");
    // return axios.post(`${Api}/user_login`, crenditial);
  };

//   export default function logout() {
//     console.log("crenditial");
//     // return axios.post(`${Api}/user_login`, crenditial);
//   };

export  {login,registration,access2};