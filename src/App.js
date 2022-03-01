import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage.js/RegisterPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/registration" element={<RegisterPage />}></Route>
      </Routes>
    </main>
  );
}

export default App;
