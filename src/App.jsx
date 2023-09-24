import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './home/HomePage.jsx';
import { BetalingPage } from './betaling/BetalingPage.jsx';
import { TicketPage } from './tickets/TicketPage';

function App() {
  
  const [saveTicket, setSaveTicket] = useState('');
  const [formData, setFormData] = useState([]);
console.log('formData in APP :>> ', formData);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage saveTicket={saveTicket} setSaveTicket={setSaveTicket} />} />
        <Route path='/betaling' element={<BetalingPage saveTickets={saveTicket} formData={formData} setFormData={setFormData}/>} />
        <Route path='/ticket' element={<TicketPage saveTickets={saveTicket} formData={formData}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

