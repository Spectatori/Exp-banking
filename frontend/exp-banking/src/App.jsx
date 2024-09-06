import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccessPage from "./pages/AccessPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/auth/register" element={<AccessPage />} />
                <Route path="/auth/login" element={<AccessPage />} />
            </Routes>
        </Router>
    );
}

export default App;