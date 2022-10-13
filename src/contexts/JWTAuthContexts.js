import {createContext,useState} from 'react';
import axios from 'axios';

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

 const AuthContext = createContext({
 });

 export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  setSession(auth.accessToken)
  return (
    <AuthContext.Provider value = {{auth, setAuth }}>
        {children}
    </AuthContext.Provider>
  );
}
export default AuthContext;
