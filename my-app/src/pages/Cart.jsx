import { Link } from 'react-router-dom'
import useCart from '../context/useCart'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { formatPrice } from '../utils/format'
import '../styles/cart.css'

export default function Cart() {
  const { lines, subtotal, shipping, total, changeQuantity, removeItem } = useCart()
  useDocumentTitle('NxtStep PH | My Cart')

  return (
    <div className="page-cart">
      <div id="intro">
        <div className="cart-header">
          <img src="/Images/cartdesign 1.png" alt="" />
          <h1>My Cart</h1>
        </div>
        <div>
          <p>Review your items and proceed to checkout.</p>
        </div>
      </div>

      <section id="cart-area">
        <div className="container">
          <div id="cart-items">
            {lines.length === 0 && (
              <p className="empty-state">
                Your cart is empty. <Link to="/products">Continue shopping</Link>
              </p>
            )}

            {lines.map(({ id, size, quantity, product }) => (
              <div className="cart-item" key={`${id}-${size}`}>
                <div className="image-frame">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="cart-info">
                  <small>{product.brand}</small>
                  <h4>{product.name}</h4>
                  <p>Size: {size}</p>
                  <p>{formatPrice(product.priceValue)}</p>
                  <div className="quantity">
                    <button onClick={() => changeQuantity(id, size, -1)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => changeQuantity(id, size, 1)}>+</button>
                  </div>
                </div>
                <div
                  className="remove"
                  role="button"
                  tabIndex={0}
                  onClick={() => removeItem(id, size)}
                  onKeyDown={(e) => e.key === 'Enter' && removeItem(id, size)}
                >
                  🗑 Remove
                </div>
              </div>
            ))}
          </div>

          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-line"><span>Subtotal</span><span>{formatPrice(subtotal)}</span></div>
            <div className="summary-line"><span>Shipping</span><span>{formatPrice(shipping)}</span></div>
            <hr />
            <div className="summary-line"><strong>Total</strong><strong>{formatPrice(total)}</strong></div>
            <a href="https://www.facebook.com/ParadisFootwear/" target="_blank" rel="noopener noreferrer">
              <button className="checkout-btn">Proceed To Checkout</button>
            </a>
            <p className="note">
              Proceeding with Checkout only directs you to our official page where you can message us for your purchase.
              <br /><br />
              We Ship Nationwide
              <br />
              Mode of Payment: Bank transfer or Gcash
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
