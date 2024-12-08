import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';




const Footer = () => (
  <footer className="bg-secondary p-3 d-flex justify-content-between align-items-center">
    <p>© 2024 Airbnb Clone. All rights reserved.</p>
    <div className='d-flex gap-3'>
       <a href="" className='text-dark'> <FontAwesomeIcon icon={faInstagram} size='lg'/></a>
       <a href="" className='text-dark'><FontAwesomeIcon icon={faFacebook} size="lg" /></a>
       <a href="" className='text-dark'><FontAwesomeIcon icon={faWhatsapp} size="lg" /></a> 
        </div>
  </footer>
);

export default Footer;
