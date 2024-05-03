import logo from './logo.svg';
import './App.css';
import SideNav from './components/SideNav';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import ThemeSettings from './components/ThemeSettings';
import ThemeSettingButton from './components/ThemeSettingButton';
import Search from './components/Search';


import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import ProductAdmin from './pages/ProductAdmin';
import OrderAdmin from './pages/OrderAdmin';
import SalesAdmin from './pages/SalesAdmin';
import Category from './pages/Category';
import Product from './pages/Product';
import Size from './pages/Size';
import Color from './pages/Color';


function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <SideNav />
        <Routes>

          <Route path="/" element={<Dashboard />} />
          
          <Route path="/product-admin" element={<ProductAdmin />} />
          <Route path="/order-admin" element={<OrderAdmin />} />
          <Route path="/sales-admin" element={<SalesAdmin />} />

          <Route path="/category" element={<Category />} />
          <Route path="/product" element={<Product />} />
          <Route path="/size" element={<Size />} />
          <Route path="/color" element={<Color />} />

        </Routes>

      </BrowserRouter>
      <ThemeSettings />
      <ThemeSettingButton />
      <Search />
      {/* <Dashboard /> */}

      <Footer />

    </div>
  );
}

export default App;
