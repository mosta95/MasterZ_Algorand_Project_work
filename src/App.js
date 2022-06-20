import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import Login from "./Login";
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import AlgoSigner from "./components/AlgoSigner/AlgoSigner";
import { Main, MainBody } from "./Main.styles";
import AlgoSignerFund from "./components/AlgoSigner/AlgoSignerFund";

function App() {
  return (
    <div className="app">
      <MainBody>
        <Header />
        <Main>
          <Router>
            <Routes>
              <Route exact path="/" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/reset" element={<Reset />} />
              <Route exact path="/fund" element={<AlgoSignerFund />} />
              <Route exact path="/algosigner" element={<AlgoSigner />} />
            </Routes>
          </Router>
        </Main>
      </MainBody>
    </div>
  );
}

export default App;
