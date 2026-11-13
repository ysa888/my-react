import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar'

export default function HomeHeader() {
  return (
    <header>
      <img className="Logo" src="/Images/Logo.png" alt="NxtStep PH" />

      <nav>
        <ul className="Navigation">
          <li><a href="#">Home</a></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/new-arrivals">What&apos;s New</Link></li>
          <li><a href="#About_Us">About us</a></li>
        </ul>
      </nav>

      <div className="RightSide">
        <SearchBar className="Search_Bar" />
        <Link to="/cart">
          <img className="Icon" src="/Images/Add to cart 1.png" alt="Cart" />
        </Link>
      </div>
    </header>
  )
}
