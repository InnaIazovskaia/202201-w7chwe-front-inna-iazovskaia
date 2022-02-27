import { Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage.js/RegisterPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<RegisterPage />}></Route>
      </Routes>
    </main>
  );
}

export default App;
