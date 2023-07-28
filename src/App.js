import { Route, Routes } from "react-router-dom";

import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthToken from "./Store/AuthToken";

const App = () => {
  return (
    <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/profile" element={<UserProfile />} />
      
    </Routes>
  );
};

export default App;
