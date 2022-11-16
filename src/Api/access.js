
import axios from "axios";

import Config from 'config';
  //login
  const login= async({...crediential})=> {
    console.log(Config.API_KEY);
     return await axios.post(`${Config.API_KEY}login`,crediential);
  };
 


export default login;