import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeToCart,removeItems } from '../redux/fetures/cartSlice';
import './cart.css';

function Cart() {
  const [info, setInfo] = useState([]);
  const { carts } = useSelector((state) => state.allcart);
  const dispatch = useDispatch();

  const handleInc = (product) => {
    dispatch(addToCart(product));
  };
  const handleDec = (product) => {
    dispatch(removeToCart(product));
  };
  const handleDecItems = (product) => {
    dispatch(removeItems(product));
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="row justify-content-center m-10">
      <div className="col-md-10">
        <div className="card">
          <div className="card-header bg-dark p-4">
            <div className="card-header-flex">
              <h5 className="text-white m-0">Cart Calculation{carts.length >0? `(${carts.length})`:""}</h5>
              {carts.length > 0 ? (
                <button className='btn btn-danger mt-0 btn-sm'>
                  <MdOutlineDeleteOutline className="delete-icon" /> Delete
                </button>
              ) : (
                <p className="text-muted">Cart is empty</p>
              )}
            </div>
          </div>
          <div className="card-body p-0">
            <table className='table class-table mb-0 table-responsive-sam'>
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Product</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th className='text-right'><span id='amount' className='amount'>Total Amount</span></th>
                </tr>
              </thead>
              <tbody>
                {carts.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <button className='' onClick={()=> handleDec (product.id)}>
                        <MdOutlineDeleteOutline className="delete-icon" />
                      </button>
                    </td>
                    <td>
                      <div className='product-img'>
                        <img src={product.image} alt={product.title} height="40px" width="40px" />
                      </div>
                    </td>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td>
                      <div className='product-qty-container'>
                        <button className='quantity-button' onClick={() =>  handleDecItems (product)}>-</button>
                        <input type='text' value={product.qty} className='quantity-input' readOnly />
                        <button className='quantity-button' onClick={() => handleInc(product)}>+</button>
                      </div>
                    </td>
                    <td className='text-right'>${product.price * product.qty}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th>&nbsp;</th>
                  <th colSpan={3}>&nbsp;</th>
                  <th>Item in Cart<span className='ml-2 mr-2'>:</span> <span className='text-danger'>{carts.length}</span> </th>
                  <th className='text-right'>Total Price<span className='ml-2 mr-2'>:</span> <span className='text-danger'>${carts.reduce((total, item) => total + item.price * item.qty, 0)}</span> </th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Cart;
