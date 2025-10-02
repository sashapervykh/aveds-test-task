import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { Account } from "./pages/Account";
import { Contacts } from "./pages/Contacts";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="account" element={<Account />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
}

export default App;
