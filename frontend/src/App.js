import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Header from "./Components/Header";
import NewTicket from "./Pages/NewTicket";
import Tickets from "./Pages/Tickets";
import Ticket from "./Pages/Ticket";
import PrivateRoute from './Components/PrivateRoute'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/new-ticket" element={<PrivateRoute />}>
              <Route path="/new-ticket" element={<NewTicket />} />
            </Route>
            <Route path="/tickets" element={<PrivateRoute />}>
              <Route path="/tickets" element={<Tickets />} />
            </Route>
            <Route path="/ticket/:ticketId" element={<PrivateRoute />}>
              <Route path="/ticket/:ticketId" element={<Ticket />} />
            </Route>
          </Routes> 
        </div>   
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
