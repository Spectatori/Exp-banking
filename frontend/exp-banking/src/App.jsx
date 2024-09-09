import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccessPage from "./pages/AccessPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Footer from './components/Footer.jsx'
import MainPage from './pages/MainPage.jsx'

function App() {
    return (
        <div className="flex flex-col h-screen" style={{
            backgroundColor:'#F9F9F9'
        }}>
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/access" element={<AccessPage />} />
                </Routes>
            </Router>
            <Footer/>
        </div>
        

    );
}

export default App;