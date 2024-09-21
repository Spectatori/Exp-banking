import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccessPage from "./pages/AccessPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Footer from './components/Footer.jsx'
import MainPage from './pages/MainPage.jsx'
import LoanCalcPage from "./pages/LoanCalcPage.jsx";
import ProfileDetailsPage from "./pages/ProfileDetailsPage.jsx";
import AccountOverviewPage from "./pages/AccountOverviewPage.jsx";
import AIChat from "./components/AIChat.jsx";
import PrivateRoute from "./components/auth-forms/PrivateRoute.jsx";
import ConsumerLoanInfoPage from "./pages/ConsumerLoanInfoPage.jsx";
import NewTransferPage from "./pages/NewTransferPage.jsx"
import { useUserStore } from "./stores/AuthStore.js";
import { Navigate } from "react-router-dom";

function App() {
    const { user } = useUserStore();

    return (
        <div className="flex flex-col min-h-screen justify-between ">
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/profile" element={<PrivateRoute element={<ProfilePage/>} />} />
                    <Route path="/profile/details" element={<PrivateRoute element={<ProfileDetailsPage/>} />} />
                    <Route path="/auth/register" element={user ? <Navigate to="/profile" /> : <AccessPage/>} />
                    <Route path="/auth/login" element={user ? <Navigate to="/profile" /> : <AccessPage/>} />
                    <Route path="/account-overview" element={<AccountOverviewPage />} />
                    <Route path="/calculator" element={<LoanCalcPage />} />
                    <Route path="/consumer-loan" element={<ConsumerLoanInfoPage />} />
                    <Route path="/new-transfer" element={<NewTransferPage />} />
                </Routes>
            </Router>
            <AIChat/>
            <Footer />
        </div>
    );
}

export default App;