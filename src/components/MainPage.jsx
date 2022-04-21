import { Button, Flex } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import SideBar from './SideBar';
import HomePage from './HomePage';
import AddRecipe from './AddRecipe';
import ShowOrders from './ShowOrders';
import ShowUsers from './ShowUsers';

const MainPage = () => {
  // const { user, setUser } = useContext(AuthContext);
  const [selectedTab, setSelectedTab] = useState('Orders');
  // const tabs = [
  //   { title: 'Dashboard', content: HomePage },
  //   { title: 'Orders', content: ShowOrders },
  //   { title: 'Users', content: ShowUsers },
  //   { title: 'Add Recipe', content: AddRecipe },
  // ];

  return (
    <Flex flexDirection="row">
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
      <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <Flex alignItems="center" justifyContent="center" marginLeft={20}>
        {/* {selectedTab === 'Dashboard' && <HomePage />} */}
        {selectedTab === 'Orders' && <ShowOrders />}
        {selectedTab === 'Add Recipe' && <AddRecipe />}
        {selectedTab === 'Users' && <ShowUsers />}
      </Flex>
    </Flex>
  );
};

export default MainPage;
