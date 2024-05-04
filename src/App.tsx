import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
// import { Suspense, lazy } from "react";
import Loader from "./components/admin-components/Loader";
import DashboardLayout from "./pages/admin-pages/DashboardLayout";
import Dashboard from "./pages/admin-pages/Dashboard";
import Products from "./pages/admin-pages/Products";
import Transaction from "./pages/admin-pages/Transaction";
import Customer from "./pages/admin-pages/Customer";
import AddProduct from "./pages/admin-pages/AddProduct";
import ManageTransaction from "./pages/admin-pages/ManageTransaction";
import EditProduct from "./pages/admin-pages/EditProduct";
import Analytics from "./pages/admin-pages/Analytics";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import HomeLayout from "./pages/HomeLayout";
import Shipping from "./pages/Shipping";

// import Checkout from "./pages/Checkout";
import PaymentMethod from "./pages/PaymentMethod";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import ReviewOrder from "./pages/ReviewOrder";




// const Dashboard=lazy(()=>import("./pages/admin-pages/Dashboard"));
// const DashboardLayout=lazy(()=>import("./pages/admin-pages/DashboardLayout"));
// const Products=lazy(()=>import("./pages/admin-pages/Products"));
// const Customer=lazy(()=>import("./pages/admin-pages/Customer"));
// const Transaction=lazy(()=>import("./pages/admin-pages/Transaction"));

const App = () => {
  return (
   <Router>
     {/* <Suspense fallback={<Loader/>}> */}
     <Routes>

       <Route path="/" element={<HomeLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/product" element={<ProductDetail/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="cart" element={<Cart/>}/>
        {/* <Route path="checkout" element={<Checkout/>}> */}
        <Route path="/shipping" element={<Shipping/>}/>
        <Route path="/payment" element={<PaymentMethod/>}/>
        <Route path="/review" element={<ReviewOrder/>}/>
        {/* </Route> */}
       </Route>
      {/* admin routes  */}
       <Route path="/l" element={<Loader/>}></Route>
       <Route path="/admin/dashboard/*" element={<DashboardLayout/>}>
       <Route index element={<Dashboard/>}/>
        <Route path="product" element={<Products/>}/>
        <Route path="product/new" element={<AddProduct/>}/> 
        <Route path="product/edit" element={<EditProduct/>}/> 
        <Route path="customer" element={<Customer/>}/>
        <Route path="transaction" element={<Transaction/>}/> 
        <Route path="transaction/manage" element={<ManageTransaction/>}/> 
        <Route path="analytics" element={<Analytics/>}/> 
       </Route>
     </Routes>
     {/* </Suspense> */}
   </Router>
  )
}

export default App