import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./page/About";
import Error from "./page/Error";
import Home from "./page/Home";
import Products from "./page/Products";
import SharedLayout from "./page/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
