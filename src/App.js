import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Body from "./Components/Body";
import LoginPage from "./Components/LoginPage";
import RegisterPage from "./Components/RegisterPage";
import AccountPage from "./Components/AccountPage"; // Import the new page

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/account" element={<AccountPage />} />
      </Routes>
    </div>
  );
}

export default App;
