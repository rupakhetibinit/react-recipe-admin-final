import React, { useContext, useEffect } from 'react';
import { ChakraProvider, Box, Grid, theme, Button } from '@chakra-ui/react';
import Login from './components/Login';
import { AuthContext } from './context/AuthContext';
function App() {
  const { user, setUser } = useContext(AuthContext);
  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('user'));
    localUser && setUser({ ...localUser });
  }, []);
  return (
    <ChakraProvider theme={theme}>
      {!user.name ? (
        <Login />
      ) : (
        <div>
          <Button
            onClick={() => {
              setUser({
                isAdmin: false,
                email: '',
                token: '',
                name: '',
              });
              localStorage.removeItem('user');
            }}
          >
            Log Out
          </Button>
        </div>
      )}
    </ChakraProvider>
  );
}

export default App;
