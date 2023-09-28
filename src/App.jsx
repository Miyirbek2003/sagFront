import { Routes, Route } from "react-router-dom";
import logo from "./assets/logo.png";
import Category from "./components/Category/Category";
import Items from "./components/Items/Items";
import Layout from "./components/Layout";
import MainC from "./components/Main/MainC";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainC />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/category/:id/:items" element={<Items />} />
      </Route>
    </Routes>
  );
}
