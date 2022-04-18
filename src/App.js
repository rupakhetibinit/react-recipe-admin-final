import React, { useContext, useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Login from './components/Login';
import MainPage from './components/MainPage';
import { AuthContext } from './context/AuthContext';
function App() {
  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    !!localUser && setUser({ ...localUser });
  }, []);
  return (
    <ChakraProvider theme={theme}>
      {!user.name ? (
        <Login />
      ) : (
        <MainPage />
        // <div>
        //   <Button
        //     onClick={() => {
        //       setUser({
        //         isAdmin: false,
        //         email: '',
        //         token: '',
        //         name: '',
        //       });
        //       localStorage.removeItem('user');
        //     }}
        //   >
        //     Log Out
        //   </Button>
        // </div>
      )}
    </ChakraProvider>
  );
}

export default App;
