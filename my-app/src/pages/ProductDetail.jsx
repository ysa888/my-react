import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import useCart from '../context/useCart'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { getProductById, SIZES } from '../data/products'
import { formatPrice } from '../utils/format'
import '../styles/shoe-detail.css'

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const navigate = useNavigate()
  const { addItem } = useCart()
  const [size, setSize] = useState('')

  useDocumentTitle(product ? `NxtStep PH | ${product.name}` : 'NxtStep PH | Not found')

  if (!product) {
    return (
      <div className="page-shoe">
        <section id="shoe-page">
          <p className="empty-state">
            We couldn&apos;t find that shoe. <Link to="/products">Back to all products</Link>
          </p>
        </section>
      </div>
    )
  }

  // "Back" goes to the previous page, or to the product list if the person
  // opened this link directly.
  const goBack = () => (window.history.state?.idx > 0 ? navigate(-1) : navigate('/products'))

  const handleAdd = () => {
    if (!size) {
      alert('Please select a size before adding to cart.')
      return
    }
    addItem(product.id, size)
    alert('Item added to cart!')
  }

  return (
    <div className="page-shoe">
      <section id="shoe-page">
        <div className="shoe-card">
          <div className="card-left">
            <div className="image-frame">
              <img className="shoe-img" src={product.detailImage || product.image} alt={product.name} />
            </div>
          </div>

          <div className="card-right">
            <div className="card-right-top">
              <button className="back-btn" onClick={goBack}>Back</button>
              <h2 className="shoe-brand">{product.brand}</h2>
              <h1 className="shoe-name">{product.name}</h1>
              <p className="price shoe-price">{formatPrice(product.priceValue)}</p>

              <p className="size-label">Select Size:</p>
              <form onSubmit={(e) => e.preventDefault()}>
                {SIZES.map((s) => (
                  <div key={s}>
                    <input
                      type="radio"
                      id={`size-${s}`}
                      name="size"
                      value={s}
                      checked={size === s}
                      onChange={() => setSize(s)}
                    />
                    <label className="choices" htmlFor={`size-${s}`}>{s}</label>
                  </div>
                ))}
              </form>
            </div>

            <div className="card-right-bottom">
              <div className="actions">
                <button className="cart-btn" onClick={handleAdd}>
                  <img className="actions-cart" src="/Images/Cart (black).png" alt="" />
                  <p>Add to Cart</p>
                </button>
              </div>

              <button
                className="buy-btn buy-now-button"
                disabled={!product.buyLink}
                onClick={() => window.open(product.buyLink, '_blank', 'noopener,noreferrer')}
              >
                {product.buyLink ? 'Buy Now' : 'Not Available'}
              </button>

              <hr />
              <p className="info">We Ship Nationwide</p>
              <p className="info">Mode of Payment: Bank transfer or Gcash</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
