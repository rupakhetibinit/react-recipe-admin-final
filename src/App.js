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
  }, [setUser]);
  return (
    <ChakraProvider theme={theme}>
      {!user.name ? <Login /> : <MainPage />}
    </ChakraProvider>
  );
}

export default App;
