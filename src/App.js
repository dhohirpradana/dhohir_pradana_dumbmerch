import "./App.css";
import "./styles/Style.css";
import Login from "./pages/Login";
import { MDBContainer } from "mdb-react-ui-kit";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <MDBContainer>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </MDBContainer>
  );
}

export default App;
