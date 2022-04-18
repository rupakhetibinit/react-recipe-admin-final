import { Button, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import SideBar from './SideBar';

const MainPage = () => {
  const { user, setUser } = useContext(AuthContext);

  return (
    <Flex>
      {/* <Button
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
      </Button> */}
      <SideBar />
    </Flex>
  );
};

export default MainPage;
