import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import Navbar from "./components/Navbar";
import Find from "./components/Find";
import Email from "./Finders/Email";
import Age from "./Finders/Age";
import Name from "./Finders/Name";
import Home from "./components/Home";

function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/:id" element={<Update />} />
          <Route path="/find" element={<Find/>}/>
          <Route path="/find/email" element={<Email/>}/>
          <Route path="/find/name" element={<Name/>}/>
          <Route path="/find/age" element={<Age/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;