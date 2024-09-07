import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccessPage from "./pages/AccessPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import Footer from './components/Footer.jsx'

function App() {
    return (
        <div className="flex flex-col h-screen" style={{
            backgroundColor:'#F9F9F9'
        }}>
            <Router>
                <Routes>
                    <Route path="/" element={<AccessPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    {/* Add other routes here */}
                </Routes>
            </Router>
            <Footer/>
        </div>
        

    );
}

export default App;