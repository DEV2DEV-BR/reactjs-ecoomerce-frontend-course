import { Route, Routes } from "react-router-dom";
import HeaderLayout from "./layouts/HeaderLayout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<Product />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
