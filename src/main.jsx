import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Login from "./pages/registration/Login.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/user/Home/Home.jsx";
import CustomerAccount from "./pages/dashbourd/customerAccount/CustomerAccount.jsx";
import Shop from "./pages/user/shop/Shop.jsx";
import { store } from "./redux/Store.js";
import { Provider } from "react-redux";
import CartPage from "./pages/user/cart/CartPage.jsx";
import BarChart from "./pages/dashbourd/barChart/BarChart.jsx";
import PieChart from "./pages/dashbourd/PieChart/PieChart.jsx";
import BumpChart from "./pages/dashbourd/bumpChart/BumpChart.jsx";
import LineChart from "./pages/dashbourd/LineChart/LineChart.jsx";
import Calendar from "./pages/dashbourd/calendar/Calendar.jsx";
import Order from "./pages/dashbourd/order/Order.jsx";
import ManageAccount from "./pages/dashbourd/manageAccount/ManageAccount.jsx";
import Chat from "./pages/dashbourd/chat/Chat.jsx";
import CategoryPage from "./pages/dashbourd/category/CategoryPage.jsx";
import AccountPharmacist from "./pages/dashbourd/accountsPharmacist/AccountParmacist.jsx";
import CartEmpty from "./pages/user/notFound/CartEmpty.jsx";
import AddProductPage from "./pages/dashbourd/addProduct/AddProductPage.jsx";
import AboutUs from "./pages/user/quickLinks/AboutUs.jsx";
import Careers from "./pages/user/quickLinks/Careers.jsx";
import ContactUs from "./pages/user/quickLinks/ContactUs.jsx";
import Consult from "./pages/user/services/consult.jsx";
import Delivery from "./pages/user/services/Delivery.jsx";
import Purchase from "./pages/user/services/Purchase.jsx";
import HeaderDashboard from "./pages/dashbourd/home/HeaderDashbouard.jsx";
import HomePage from "./pages/dashbourd/HomePage/HomePage.jsx";
import Products from "./pages/dashbourd/Products/Products.jsx";
import CategoryProduct from "./pages/dashbourd/Products/CategoryProduct.jsx";
import Payment from "./pages/user/payment/Payment.jsx";
import Archive from "./pages/user/Archive/Archive.jsx";
import History from "./pages/user/hestory/History.jsx";
import Register1 from "./pages/registration/sign/Register1.jsx";
import Register2 from "./pages/registration/sign/Register2.jsx";

const role = window.localStorage.getItem("role");

const routerPath = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="not" element={<CartEmpty />} />
        <Route path="consult" element={<Consult />} />
        <Route path="delivery" element={<Delivery />} />
        <Route path="purchase" element={<Purchase />} />
        <Route path="payment" element={<Payment />} />
        <Route path="archive" element={<Archive />} />
        <Route path="history" element={<History />} />
        {!role && <Route path="login" element={<Login />} />}
      </Route>
      <Route path="registration">
        {!role && <Route path="register" element={<Register1 />} />}
      </Route>
      <Route path="registration2">
        {!role && <Route path="register2" element={<Register2 />} />}
      </Route >

      {(role === "admin") | (role === "pharmasict") && (
        <Route path="dashboard" element={<HeaderDashboard />}>
          <Route index element={<HomePage />} />
          <Route path="accounts" element={<CustomerAccount />} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="order" element={<Order />} />
          <Route path="chat" element={<Chat />} />
          <Route path="category" element={<CategoryPage />} />
          <Route path="addProduct" element={<AddProductPage />} />
          <Route path="products" element={<Products />}>
            <Route
              path="dashboard/products/categoryProduct"
              element={<CategoryProduct />}
            />
          </Route>
          {role === "admin" ? (
            <Route>
              <Route path="bar" element={<BarChart />} />
              <Route path="pie" element={<PieChart />} />
              <Route path="bump" element={<BumpChart />} />
              <Route path="line" element={<LineChart />} />
              <Route path="manage" element={<ManageAccount />} />
              <Route path="accountPharmacist" element={<AccountPharmacist />} />
            </Route>
          ) : null}
        </Route>
      )}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={routerPath} />
      </Provider>
    </React.StrictMode>
  </>
);
