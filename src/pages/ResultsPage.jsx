import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Title } from '../components/Title';
import { Button } from '../components/Button';

export const Results = () => {
  const location = useLocation();
  const { results } = location.state || {};

  return (
    <div className='bg-ivory'>
      <div className="container mt-4">
      <div className="py-5"></div>
      <div className="py-md-5"></div>
      <div className="py-5"></div>
    
            <div className="py-3"></div>
            <div className="text-green">
                <Title title="Wait is over! Here are your results" />
            </div>
        {results ? (
          <div  style={{height:"70vh"}}>
            {Object.entries(results).map(([key, value]) => (
              <div className='py-4 text-center' key={key}>
                <h5 className='fw-bold'>Based on the analysis, your results indicate <span className='text-green text-decoration-underline'>{value}.</span> </h5>
                <h6>Please consult with a doctor for more detailed information and guidance. We're here to support you.</h6>
                <div className="d-flex">
                  <div className="m-auto">
                   <Link to="/contact"><Button btnText="Book an appointment now!" bgColor="btn-success"></Button></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='py-2 text-center'>No results available</div>
        )}
      </div>
    </div>
  );
};
