import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccessPage from "./pages/AccessPage.jsx";
import MainPage from "./pages/MainPage.jsx"
import ProfilePage from "./pages/ProfilePage.jsx"
import LoanCalcPage from "./pages/LoanCalcPage.jsx";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/auth/register" element={<AccessPage />} />
                <Route path="/auth/login" element={<AccessPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/calculator" element={<LoanCalcPage />} />
            </Routes>
        </Router>
    );
}

export default App;