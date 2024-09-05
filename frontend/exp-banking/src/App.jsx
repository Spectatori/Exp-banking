import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {RegisterPage} from "./pages/RegisterPage.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<RegisterPage />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
}

export default App;