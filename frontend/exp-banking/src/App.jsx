import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccessPage from "./pages/AccessPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Footer from './components/Footer.jsx'
import MainPage from './pages/MainPage.jsx'
import LoanCalcPage from "./pages/LoanCalcPage.jsx";
import ProfileDetailsPage from "./pages/ProfileDetailsPage.jsx";
import AIChat from "./components/AIChat.jsx";

function App() {
    
    return (
        <div className="flex flex-col h-full  ">
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/profile/details" element={<ProfileDetailsPage />} />
                    <Route path="/auth/register" element={<AccessPage />} />
                    <Route path="/auth/login" element={<AccessPage />} />
                    <Route path="/calculator" element={<LoanCalcPage />} />
                </Routes>
            </Router>
            <AIChat/>
            <Footer />
        </div>
    );
}

export default App;