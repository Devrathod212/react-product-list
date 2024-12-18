import React from 'react';
import './ProductList.css';

const ProductItem = ({ product, onDelete }) => {
  return (
    <div className="product-item">
      <span>
        <strong>{product.name}</strong> - ${product.price} ({product.category})
      </span>
      <button onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  );
};

export default ProductItem;
