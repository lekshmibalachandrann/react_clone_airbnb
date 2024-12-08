import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const ListingCard = ({ listing }) => {
  const handleBooking = () => {
    toast.success(`Booking successfully done for ${listing.title}`);
  };

  return (
    <>
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={listing.image} style={{height:'200px', width:'100%'}}/>
      <Card.Body>
        <Card.Title>{listing.title}</Card.Title>
        <Card.Text>
          {listing.location}
          <br />
          ₹{listing.price} / night
        </Card.Text>
        <Button variant="primary" onClick={handleBooking}>
          Book Now
        </Button>
      </Card.Body>
    </Card>
    <ToastContainer position='top-center' theme="colored" autoClose={2000} />
    </>
  );
  
};


export default ListingCard;
