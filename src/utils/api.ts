/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */ 

// Remove the es lint later 

import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const api = axios.create({
  baseURL: 'https://jd-edwards-api.example.com', // Replace with actual JD Edwards API URL
  timeout: 5000,
});

export const fetchProducts = async (customerNumber: string) => {
  // Mock for now; replace with JD Edwards API call
  return new Promise((resolve) => resolve([]));
  // return api.get(`/products?customerNumber=${customerNumber}`).then(res => res.data);
};

export const submitOrder = async (order: any) => {
  // Mock for now
  return new Promise((resolve) => resolve({ success: true }));
  // return api.post('/orders', order).then(res => res.data);
};

export const forgotPassword = async (email: string) => {
  // Mock for now
  return new Promise((resolve) => resolve({ success: true }));
  // return api.post('/auth/forgot-password', { email }).then(res => res.data);
};