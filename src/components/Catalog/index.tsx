import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { IProduct } from '../../store/modules/cart/types';
import { addProductToCart } from '../../store/modules/cart/actions';
import api from '../../services/api';

const Catalog: React.FC = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    api.get('products').then(response => {
      setCatalog(response.data);
    });
  }, []);

  const handleAddProductToCart = useCallback(() => {
    // dispatch(addProductToCart());
  }, []);

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <>
          <article key={product.id}>
            <strong>{product.title}</strong> {' - '}
            <span>{product.price}</span> <button type="button">Buy</button>
          </article>
          <br />
        </>
      ))}
    </main>
  );
};

export default Catalog;