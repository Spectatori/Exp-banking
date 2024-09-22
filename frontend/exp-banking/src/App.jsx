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
import NewTransactionPage from "./pages/NewTransactionPage.jsx";
import ToastConfig from "./config/ToastConfig.jsx";
import Navbar from "./components/nav-bar/Navbar.jsx";

//import { useUserStore } from "./stores/AuthStore.js";
//import { Navigate } from "react-router-dom";

function App() {
    return (
        <div className="flex flex-col min-h-screen justify-between ">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/"  element={<PrivateRoute element={<MainPage />} authRequired={false} />} />
                    <Route path="/profile" element={<PrivateRoute element={<ProfilePage />} />} />
                    <Route path="/profile/details" element={<PrivateRoute element={<ProfileDetailsPage />} />} />
                    <Route path="/auth/register" element={<PrivateRoute element={<AccessPage />} authRequired={false} />} />
                    <Route path="/auth/login" element={<PrivateRoute element={<AccessPage />} authRequired={false} />} />
                    <Route path="/account-overview" element={<PrivateRoute element={<AccountOverviewPage />} />} />
                    <Route path="/calculator" element={<LoanCalcPage />} />
                    <Route path="/consumer-loan" element={<ConsumerLoanInfoPage />} />
                    <Route path="/new-transfer" element={<NewTransferPage />} />
                    <Route path="/new-transaction" element={<PrivateRoute element={<NewTransactionPage />} />} />
                </Routes>
            </Router>
            <AIChat />
            <Footer />
            <ToastConfig />
        </div>
    );
}

export default App;