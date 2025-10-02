import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Account } from "./pages/Account";
import { Contacts } from "./pages/Contacts";

function App() {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path="account" element={<Account />}></Route>
      <Route path="contacts" element={<Contacts />}></Route>
    </Routes>
  );
}

export default App;
