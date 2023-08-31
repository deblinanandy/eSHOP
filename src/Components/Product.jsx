import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

export default function Product() {
  const [info, setInfo] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((res) => {
        setInfo(res.data); 
        setFilter(res.data); 
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const Loading = () => {
    return (
      <div className="col-md-3">
        <Skeleton height={350} />
      </div>
    );
  };

  const filterProduct = (category) => {
    const update = info.filter((product) => product.category === category);
    setFilter(update);
  };

  const ShowProduct = () => {
    return (
      <div>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className='btn btn-outline-dark me-2' onClick={() => setFilter(info)}>All</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("men's clothing")}>Men's Clothing</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("women's clothing")}>Women's Clothing</button>
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("jewelery")}>Jewelry</button> {/* Fixed typo */}
          <button className='btn btn-outline-dark me-2' onClick={() => filterProduct("electronics")}>Electronics</button>
        </div>
        <div className="row justify-content-center">
          {filter.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 text-center p-4">
                <img className="card-img-top" src={product.image} alt={product.title} height="250px" />
                <div className="card-body">
                  <h5 className="card-title mb-0">{product.title.substring(0, 50)}</h5>
                  <p className="card-text lead fw-bold">${product.price}</p>
                  <Link to={`/product/${product.id}`} className="btn btn-outline-dark">Buy Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className='container my-5 py-5 '>
        <div className='row'>
          <div className='col-12 mb-5'>
            <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
            <hr />
            {loading ? <Loading /> : <ShowProduct />}
          </div>
        </div>
      </div>
    </div>
  );
}
