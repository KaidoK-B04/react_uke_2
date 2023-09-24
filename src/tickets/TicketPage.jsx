// import PropTypes from "prop-types";
import "../layouts/TicketPage.css";

// TicketPage.propTypes = {
//   saveTickets: PropTypes.number, 
//   formData: PropTypes.array
// };

export function TicketPage({ formData, saveTickets }) {
  
  return (
    <div id="Section">
      
      <h1>A RECEIPT</h1>
      
      <p>
        <strong>Count of tickets:</strong> {saveTickets}
      </p>

      <h2>Submitted Data</h2>
      {console.log('formData ticketPage :>> ', formData)}
      {formData.map((data, index) => (
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
      ))}
    </div>
  );
}

export default TicketPage;