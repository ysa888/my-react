import { Link, Outlet } from 'react-router-dom'
import SearchBar from './SearchBar'
import '../styles/shop-header.css'

// Header + page frame shared by Products, New Arrivals, Product detail and Cart.
export default function ShopLayout() {
  return (
    <div className="shop-layout">
      <header id="products-header">
        <div className="image">
          <Link to="/">
            <img src="/Images/wwwwdesign 1png.png" alt="NxtStep PH" />
          </Link>
        </div>

        <div className="middle-header">
          <div className="search">
            <SearchBar className="search-bar" live />
          </div>

          <div className="navigation">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">All Products</Link></li>
              <li><Link to="/new-arrivals">New Arrivals</Link></li>
              <li><Link to="/products?brand=Nike">Nike</Link></li>
              <li><Link to="/products?brand=Reebok">Reebok</Link></li>
              <li><Link to="/products?brand=New Balance">New Balance</Link></li>
            </ul>
          </div>
        </div>

        <div className="icons">
          <Link to="/cart">
            <img src="/Images/Add to cart 1.png" alt="Cart" />
          </Link>
        </div>
      </header>

      <Outlet />
    </div>
  )
}
