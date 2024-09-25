import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AccessPage from "./pages/AccessPage.jsx";
import ProfilePage from "./pages/ProfilePagе.jsx";
import Footer from './components/Footer.jsx'
import MainPage from './pages/MainPage.jsx'
import LoanCalcPage from "./pages/LoanCalcPage.jsx";
import Transactions from "./pages/Transactions.jsx";
import AccountOverviewPage from "./pages/AccountOverviewPage.jsx";
import AIChat from "./components/AIChat.jsx";
import PrivateRoute from "./components/auth-forms/PrivateRoute.jsx";
import ConsumerLoanInfoPage from "./pages/ConsumerLoanInfoPage.jsx";
import NewTransferPage from "./pages/NewTransferPage.jsx"
import NewTransactionPage from "./pages/NewTransactionPage.jsx";
import ToastConfig from "./config/ToastConfig.jsx";
import Navbar from "./components/nav-bar/Navbar.jsx";
import PaymentsPage from "./pages/PaymentsPage.jsx";
import LoansPage from "./pages/LoansPage.jsx";
import LoanFormPage from "./pages/LoanFormPage.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";

import { useFetchUser } from "./hooks/useFetchUser.js";

//import { useUserStore } from "./stores/AuthStore.js";
//import { Navigate } from "react-router-dom";

function App() {
    useFetchUser();
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Router>
                {/*TODO: Don't show navbar in '/admin'*/}
                <Navbar />
                <Routes>
                    {/* doesn't matter if you're authenticated or not */}
                    <Route path="/loans/calculator" element={<LoanCalcPage />} />
                    <Route path="/loans/consumer-loan" element={<ConsumerLoanInfoPage />} />
                    
                    {/* pages only accessible after logging in */}
                    <Route path="/profile" element={<PrivateRoute element={<ProfilePage />} />} />
                    <Route path="/transactions" element={<PrivateRoute element={<Transactions />} />} />
                    <Route path="/account-overview" element={<PrivateRoute element={<AccountOverviewPage />} />} />
                    <Route path="/payments/new-transfer" element={<PrivateRoute element={<NewTransferPage />} />} />
                    <Route path="/payments/new-transaction" element={<PrivateRoute element={<NewTransactionPage />} />} />
                    <Route path="/payments" element={<PrivateRoute element={<PaymentsPage />} />} />
                    <Route path="/loans" element={<PrivateRoute element={<LoansPage />} />} />
                    <Route path="/loans/request" element={<PrivateRoute element={<LoanFormPage />} />} />

                    {/* pages only accessible before logging in */}
                    <Route path="/"  element={<PrivateRoute element={<MainPage />} authRequired={false} />} />
                    <Route path="/auth/register" element={<PrivateRoute element={<AccessPage />} authRequired={false} />} />
                    <Route path="/auth/login" element={<PrivateRoute element={<AccessPage />} authRequired={false} />} />

                    {/*TODO: Admin panel only for admin*/}
                    <Route path="/admin"  element={<PrivateRoute element={<AdminPanel />} />} />
                </Routes>
            </Router>
            <AIChat />
            <ToastConfig />
            <Footer />          
        </div>
    );
}

export default App;