import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import axios from "axios";

axios.defaults.baseURL = 'http://localhost:4000';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout></Layout>}>
        <Route index element={<Index></Index>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Registration></Registration>}></Route>

      </Route>
    </Routes>
  );
}

export default App;
