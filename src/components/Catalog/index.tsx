import React, { useEffect, useState } from 'react';

import { IProduct } from '../../store/modules/cart/types';
import CatalogItem from '../CatalogItem';
import api from '../../services/api';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <div key={product.id}>
          <CatalogItem product={product} />
          <br />
        </div>
      ))}
    </main>
  );
};

export default Catalog;
