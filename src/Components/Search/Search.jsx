import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom';

export default function Product() {
  const [info, setInfo] = useState([]);
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

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

  const searchProduct = (term) => {
    setSearchTerm(term);
    const searchTermLowerCase = term.toLowerCase();
    const update = info.filter(
      (product) =>
        product.title.toLowerCase().includes(searchTermLowerCase) ||
        product.category.toLowerCase().includes(searchTermLowerCase)
    );
    setFilter(update);
  };

  const ShowProduct = () => {
    return (
      <div>
        <div className="buttons d-flex justify-content-center mb-3">
          {/* ... existing buttons ... */}
        </div>
        <div className="d-flex justify-content-center mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by title or category"
            value={searchTerm}
            onChange={(e) => searchProduct(e.target.value)}
          />
        </div>
        <div className="row justify-content-center">
          {filter.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              {/* ... existing product cards ... */}
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
