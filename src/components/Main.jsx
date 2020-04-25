import React from 'react';
import { Link } from 'react-router-dom';

function Main(){
  return (
    <div className="d-flex flex-row justify-content-center">
      <Link to="/employee" className="btn btn-dark btn-custom">Employee</Link>
    </div>
  );
}

export default Main;