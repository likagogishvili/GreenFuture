// import Header from "./Header/Header";
import Reset from "./Autorization/ResetPassword/Reset";
import SignIn from "./Autorization/SignIn/SignIn";
import SignUp from "./Autorization/SignUp/SignUp";
import Landing from "./Landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/resetPassword" element={<Reset />} />
      </Routes>
    </Router>
  );
}

export default App;
