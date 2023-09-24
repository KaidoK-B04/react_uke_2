import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import "../layouts/LayoutDesign.css";
import payCard from '../assets/paycards.jpg';
import wingWheel from '../assets/wing_wheel.jpg';

BetalingPage.propTypes = {
  saveTickets: PropTypes.number,
};

export function BetalingPage({ saveTickets }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const navigate = useNavigate();
  const [submittedData, setSubmittedData] = useState([]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData([...submittedData, formData]);
    setFormData({
      firstName: "",
      lastName: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
    });
    navigate('/ticket');
  };

  return (
    <div id="Section">
      <div className='headerParent'>
      <div className='headerText'>
      <h1>PAY WITH CREDIT CARD</h1>
      </div>
      <div id="HeaderChild">
      <h1>{saveTickets} Ticket  {saveTickets * 150} kr.</h1>
      </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Card Number</label>
          <input
            type="number"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Expiration Date</label>
          <input
            type="number"
            name="expirationDate"
            value={formData.expirationDate}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>CVV</label>
          <input
            type="number"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            required
          />
        </div>
        <div id="submitSection">
          <button className="SubmitButton" type="submit">Submit</button>
        </div>
      </form>
        <img className="payCardList" src={payCard} />
      <div>
        {/* <h2>Submitted Data (shows on the next page)</h2>
        {submittedData.map((data, index) => (
          <div key={index}>
            <p>
              <strong>Name:</strong> {data.firstName} {data.lastName}
            </p>
            <p>
              <strong>Card Number:</strong> {data.cardNumber}
            </p>
            <p>
              <strong>Expiration Date:</strong> {data.expirationDate}
            </p>
            <p>
              <strong>CVV:</strong> {data.cvv}
            </p>
          </div>
        ))} */}
      </div>

      <div className='footerContainer'>
        <img className="wingWheelLogo" src={wingWheel} />
      </div>

    </div>
  );
}

export default BetalingPage;