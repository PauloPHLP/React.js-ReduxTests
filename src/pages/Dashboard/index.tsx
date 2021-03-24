import React from 'react';

import Catalog from '../../components/Catalog';
import Cart from '../../components/Cart';

const Dashboard: React.FC = () => {
  return (
    <>
      <Catalog />
      <Cart />
    </>
  );
};

export default Dashboard;
