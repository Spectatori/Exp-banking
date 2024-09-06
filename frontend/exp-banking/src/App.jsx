import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccessPage from "./pages/AccessPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AccessPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

export default App;