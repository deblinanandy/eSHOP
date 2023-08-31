import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { addToCart } from '../redux/fetures/cartSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Products() {
  const { id } = useParams();
  const [det, setDet] = useState({});

  const cartData=useSelector((state)=>state. allcart);
  console.log(cartData); 
  const dispatch = useDispatch();
  const send=(e)=>{
    dispatch(addToCart(e))
  }
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        console.log(res.data); 
        setDet(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

 

  return (
    <div className="container py-5">
      <div className="row py-5">
        <div className="col-md-6">
          <img src={det.image} alt={det.title} height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h1 className="text-uppercase text-black-50">{det.category}</h1>
          <h1 className='display-5'>{det.title}</h1>
          <p className='lead fw-bolder'>Rating: {det.rating && det.rating.rate}</p>
          <i className='fa fa-star'></i>
          <h3 className='display-6 fw-bold my-4'>$ {det.price}</h3>
          <p className='lead'>{det.description}</p>
          <button className='btn btn-outline-dark ms-2 px-3' onClick={()=>send(det)} >Add to Cart</button>
          <Link to="/cart" className='btn btn-outline-dark ms-2 px-3'>Go to Cart</Link>
        </div>
      </div>
    </div>
  );
}

export default Products;
