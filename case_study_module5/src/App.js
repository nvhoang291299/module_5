import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { Route, Routes } from "react-router-dom";
import TypeRoom from "./components/TypeRoom";
import EditServices from "./components/EditServices";
import CreateServices from "./components/CreateService";
import ListCustomer from "./components/ListCustomer";
import EditCustomer from "./components/EditCustomer";
import ListContact from "./components/ListContact";
import CreateContact from "./components/CreateContact";
import CreateCustomer from "./components/CreateCustomer";



function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/typeRoom" element={<TypeRoom />}/>
          <Route path="/editService" element={<EditServices />}/>
          <Route path="/createService" element={<CreateServices />}/>
          <Route path="/listCustomer" element={<ListCustomer />}/>
          <Route path="/editCustomer" element={<EditCustomer />}/>
          <Route path="/createCustomer" element={<CreateCustomer />}/>
          <Route path="/listContact" element={<ListContact />}/>
          <Route path="/createContact" element={<CreateContact />}/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
