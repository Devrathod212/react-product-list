import React, { useState } from 'react';

// Sample product data
const initialProducts = [
  { id: '1', name: 'Laptop', price: 1000, category: 'Electronics' },
  { id: '2', name: 'Shoes', price: 50, category: 'Fashion' },
  { id: '3', name: 'Watch', price: 200, category: 'Accessories' },
];

const ProductList = () => {
  // State to store the list of products
  const [products, setProducts] = useState(initialProducts);

  // Handle deleting a product by id
  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  // Handle adding a new product
  const handleAddProduct = () => {
    const newProduct = {
      id: `${products.length + 1}`,
      name: 'New Product',
      price: 100,
      category: 'Miscellaneous',
    };
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h2>Product List</h2>

      {/* Display the list of products */}
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong><br />
            Price: ${product.price}<br />
            Category: {product.category}<br />
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Button to add a new product */}
      <button onClick={handleAddProduct}>Add New Product</button>
    </div>
  );
};

export default ProductList;
