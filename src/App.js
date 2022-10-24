import LogIn from "./components/login/logIn";
import SignUp from "./components/signup/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/navigation/header";
import Products from './pages/products/products';
import Home from "./pages/home/home";
import ProductDetails from "./pages/productDetails/productDetails";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/login" element={<LogIn />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route path="/products/:id" exact element={<ProductDetails />}/>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
