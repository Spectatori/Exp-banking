import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccessPage from "./pages/AccessPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Footer from './components/Footer.jsx'
import MainPage from './pages/MainPage.jsx'
import ProfileDetailsPage from "./pages/ProfileDetailsPage.jsx";
import AccountOverviewPage from "./pages/AccountOverviewPage.jsx";

function App() {
    return (
        <div className="flex flex-col h-screen justify-between">
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/profile/details" element={<ProfileDetailsPage />} />
                    <Route path="/auth/register" element={<AccessPage />} />
                    <Route path="/auth/login" element={<AccessPage />} />
                    <Route path="/account-overview" element={<AccountOverviewPage />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;