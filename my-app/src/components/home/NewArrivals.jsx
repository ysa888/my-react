import { Link } from 'react-router-dom'
import { products } from '../../data/products'
import { formatPrice } from '../../utils/format'

export default function NewArrivals() {
  const latest = products.filter((p) => p.isNew).slice(0, 3)

  return (
    <section id="new_arrivals">
      <div className="arrivals_container">
        <div className="arrivals_text">
          <div className="arrivals_left_text">
            <h1>New Arrivals</h1>
          </div>
          <div className="arrivals_right_text">
            <Link to="/new-arrivals">
              <p>View All -&gt;</p>
            </Link>
          </div>
        </div>

        <div className="arrivals_choices">
          {latest.map((product) => (
            <div className="arrivals_wrapper" key={product.id}>
              <Link to={`/shoe/${product.id}`}>
                <div className="arrivals_shoe_container">
                  <div className="arrivals_shoe_img">
                    <div className="arrivals_shoe_img_box">
                      <div className="new_tag">NEW</div>
                      <img src={product.homeImage ?? product.image} alt={product.name} />
                    </div>
                  </div>
                  <div className="arrivals_shoe_info">
                    <h1 className="shoe_name">{product.name}</h1>
                    <p className="shoe_price">{formatPrice(product.priceValue)}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
