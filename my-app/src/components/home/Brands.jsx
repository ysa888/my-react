import { Link } from 'react-router-dom'

const BRAND_CARDS = [
  { name: 'Nike', image: '/Images/Shoes/Nike.jpg' },
  { name: 'New Balance', image: '/Images/Shoes/New Balance.jpg' },
  { name: 'Reebok', image: '/Images/Shoes/Reebok.jpg' },
]

export default function Brands() {
  return (
    <div className="Brands" id="Brands">
      <div className="text">
        <h1>Premium Footwear</h1>
        <p>Select a Brand</p>
      </div>

      <div className="choices">
        {BRAND_CARDS.map((brand) => (
          <div className="shoe_container" key={brand.name}>
            <Link to={`/products?brand=${encodeURIComponent(brand.name)}`}>
              <div className="shoe">
                <img src={brand.image} alt={brand.name} />
              </div>
              <p className="brand_name">{brand.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
