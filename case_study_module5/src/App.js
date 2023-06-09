import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { Route, Routes } from "react-router-dom";
import TypeRoom from "./components/TypeRoom";
import EditServices from "./components/EditServices";
import CreateServices from "./components/CreateService";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/typeRoom" element={<TypeRoom />}/>
        <Route path="/editService" element={<EditServices />}/>
        <Route path="/createService" element={<CreateServices />}/>
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
