import React from 'react'
import { Route } from 'react-router-dom'
import { Navigate, Outlet } from 'react-router-dom'
import { Component, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = (props) => {
  const navigate = useNavigate()
  const {Component} = props;

  useEffect(() =>{
    const login = localStorage.getItem('login');
    if(!login){
      navigate("/login")
    }
  })
  return (
    <div>
     
    <Component/>
    </div>
  )
}

export default ProtectedRoute;