import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import HeaderLayout from "./layouts/HeaderLayout";

function MainRoutes() {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;
