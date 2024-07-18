import { useParams } from 'react-router-dom';
import './productDetails.css';
import { useEffect, useState } from 'react';
import { demoData } from '../services/dataService';

function ProductDetails() {
  const [displayProduct, setDisplayProduct] = useState({});

  const { id } = useParams();

  function getProduct() {
    const theProd = demoData.find((p) => p.id == id);
    setDisplayProduct(theProd);
  }

  // when the component loads
  useEffect(getProduct, []);

  return (
    <div className="details">
      <h1>Details page</h1>

      <div>
        <h3>{displayProduct.title}</h3>
        <img src={displayProduct.image} alt="" />
      </div>
    </div>
  );
}

export default ProductDetails;
