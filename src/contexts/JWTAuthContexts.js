import {createContext,useState} from 'react';

// const setSession = (accessToken) => {
//   if (accessToken) {
//     localStorage.setItem('accessToken', accessToken);
//     axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
//   } else {
//     localStorage.removeItem('accessToken');
//     delete axios.defaults.headers.common.Authorization;
//   }
// };

 const login = (auth) => {
  console.log(auth)
     // const response = await axios.post('/api/auth/login', {
    //   auth
    // });
    // const { accessToken } = response.data;

    // setSession(accessToken);
 }

 const AuthContext = createContext({});

 export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
     login(auth);

  return (
    <AuthContext.Provider value = {{auth, setAuth }}>
        {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
