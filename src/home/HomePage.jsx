import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../layouts/LayoutDesign.css';
import wingWheel from '../assets/wing_wheel.jpg';

HomePage.propTypes = {
  saveTicket: PropTypes.any,
  setSaveTicket: PropTypes.func.isRequired,
};

export function HomePage(props) {
  const { saveTicket, setSaveTicket } = props;
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      const newCount = count + 1;
      setCount(newCount);
      setSaveTicket('');
    }
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      setSaveTicket('');
    }
  };

  const save = () => {
    if (count >= 1) {
      const newSaveTicket = `${count} ${saveTicket}`;
      setSaveTicket(newSaveTicket);
      setCount(0);
    } else {
      setSaveTicket('Choose the quantity');
    }
  };

  return (
    <div id="Section">
      <div className='headerParent'>
      <div className='headerText'>
      <h1>Bergens Electric Tramway</h1>
      <h2>Anno. 1897 - 2023</h2>
      </div>
      <div id="HeaderChild">
        <h1>Tickets Online</h1>
      </div>
      </div>
      <div id="Counter">
        <button id="DecrementButton" onClick={decrement}>
          <h1>-</h1>
        </button>
        <h1 id="CountEl">{count}</h1>
        <button id="IncrementButton" onClick={increment}>
          <h1>+</h1>
        </button>
      </div>
      <p id="SaveEl">{saveTicket}</p>

      {count !== 0 ? (
        <Link to="/betaling">
          <button id="SaveButton" onClick={save}>
            BUY
          </button>
        </Link>
      ) : (
        <button id="SaveButton" onClick={save}>
          ADD
        </button>
      )}
      <div className='footerContainer'>
        <img className="wingWheelLogo" src={wingWheel} />
      </div>
    </div>
  );
}

export default HomePage;