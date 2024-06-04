import React from 'react';
import { Link } from 'react-router-dom';
import card1 from '../assets/hemorrhoids.png'
import card2 from "../assets/hurt (1).png"
import card3 from "../assets/hurt.png"
import card4 from "../assets/organ.png"
import { Button } from './Button';

const Data = [
  {
    "img": card1,
    "title": "Piles",
    "description": "Swollen veins in the rectal area, causing discomfort, itching, and bleeding, often associated with straining during bowel movements.",
    "path": "/piles" 
  },
  {
    "img": card2,
    "title": "Fissure",
    "description": "A painful tear or crack in the lining of the anus, causing discomfort and bleeding during bowel movements.",
    "path": "/fissure" 
  },
  {
    "img": card4,
    "title": "Pilonidal Sinus",
    "description": "A small tunnel-like cavity in the skin, often near the tailbone, prone to infection.",
    "path": "/pilonidal" 
  },
  {
    "img": card3,
    "title": "Fistula",
    "description": "An abnormal tunnel that forms between the anal canal and the skin near the anus, often resulting from an untreated abscess.",
    "path": "/fistula" 
  }
];

export const Cards = () => {
  return (
    <div className="container">
      <div className="row">
        {Data.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 mb-4">
            <div className="card bg-ivory rounded-4  text-green h-100" style={{border:"2px solid rgb(0, 77, 0)"}}>
             <div className='p-3'> <img src={item.img} className="img-fluid w-100" alt={item.title} style={{height:"250px",borderRadius:"10px"}} /></div>
              <div className="card-body bg-gree n te xt-ivory  d-flex flex-column">
                <h5 className="card-title fw-bold text-center">{item.title}</h5>
                <p className="flex-grow-1 py-2 fs-6">{item.description}</p>
                <div className=" m -auto">
                  <Link to={item.path}><Button btnText="Learn More" bgColor="btn-success w-100"/></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
