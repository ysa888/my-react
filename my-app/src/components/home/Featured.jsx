import { Link } from 'react-router-dom'
import { getProductById } from '../../data/products'
import { formatPrice } from '../../utils/format'

const FEATURED_IDS = [
  'jordan-38-white-metallic-gold',
  'nike-impact-3-black-grey',
  'nike-kd-trey-5-x-green-strike',
]

export default function Featured() {
  const featured = FEATURED_IDS.map(getProductById).filter(Boolean)

  return (
    <section id="Featured">
      <div className="featured_text">
        <h1>Featured Products</h1>
        <Link to="/products">VIEW ALL →</Link>
      </div>

      <div className="featured_background">
        {featured.map((product) => (
          <div className="featured_container" key={product.id}>
            <div className="blur"></div>
            <Link to={`/shoe/${product.id}`}>
              <div>
                <div className="featured_shoe">
                  <img src={product.homeImage ?? product.image} alt={product.name} />
                </div>

                <div className="featured_shoe_info">
                  <p>{product.name}</p>
                  <p>{formatPrice(product.priceValue)}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
