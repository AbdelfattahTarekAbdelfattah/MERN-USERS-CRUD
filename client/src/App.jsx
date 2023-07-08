import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./components/Users";
import CreateUser from "./components/Create";
import Update from "./components/Update";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Users />} />
      <Route path="/create" element={<CreateUser />} />
      <Route path="/update/:id" element={<Update />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
