// import Header from "./Header/Header";
import SignInSide from "./Autorization/SignIn/SignIn";
import Landing from "./Landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signIn" element={<SignInSide />} />
      </Routes>
    </Router>
  );
}

export default App;
