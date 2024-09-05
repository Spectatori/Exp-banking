import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AccessPage from "./pages/AccessPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="" element={<AccessPage />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

export default App;