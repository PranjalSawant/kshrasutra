import React from 'react';
import { useParams } from 'react-router-dom';

const Data = [
  {
    "img": "https://example.com/image1.jpg",
    "title": "Card 1",
    "description": "Details about Card 1",
    "path": "/details/0"
  },
  {
    "img": "https://example.com/image2.jpg",
    "title": "Card 2",
    "description": "Details about Card 2",
    "path": "/details/1"
  },
  {
    "img": "https://example.com/image3.jpg",
    "title": "Card 3",
    "description": "Details about Card 3",
    "path": "/details/2"
  },
  {
    "img": "https://example.com/image4.jpg",
    "title": "Card 4",
    "description": "Details about Card 4",
    "path": "/details/3"
  }
];

export const Details = () => {
  const { index } = useParams();
  const item = Data.find(data => data.path === `/details/${index}`);

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img src={item.img} className="card-img-top" alt={item.title} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
