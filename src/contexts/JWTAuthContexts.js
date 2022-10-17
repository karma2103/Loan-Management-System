import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import jwtDecode from 'jwt-decode';

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem('accessToken', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('accessToken');
    delete axios.defaults.headers.common.Authorization;
  }
};

const isValidToken = (accessToken) => {
  if (!accessToken) {
    return false;
  }

  const decodedToken = jwtDecode(accessToken);
  const currentTime = Date.now() / 1000;
  return decodedToken.exp > currentTime;
};

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const navigate = useNavigate();
  
  if ( Object.keys(auth).length !==0) {
    setSession(auth);
  }

  useEffect(() => {
    (async () => {
      try {
        const accessToken = window.localStorage.getItem("accessToken");

        if (accessToken && isValidToken(accessToken)) {
          setSession(accessToken);
          navigate("/");
        }else{
          navigate("/Lms/login");
        }
      } catch (err) {
        navigate("/Lms/login");
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
