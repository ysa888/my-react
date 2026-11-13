import { useState } from 'react'
import { Link } from 'react-router-dom'
import useCart from '../context/useCart'
import { SIZES } from '../data/products'
import { formatPrice } from '../utils/format'

// One product tile on the Products / New Arrivals pages.
export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const [size, setSize] = useState('')

  const handleAdd = () => {
    if (!size) {
      alert('Please select a size before adding to cart.')
      return
    }
    addItem(product.id, size)
    alert(`${product.name} (Size ${size}) added to cart!`)
  }

  return (
    <div className="product-wrapper" data-brand={product.brand}>
      <Link to={`/shoe/${product.id}`}>
        <div className="container">
          <div className="shoe" style={{ backgroundColor: product.bgColor }}>
            <img className="shoe-img" src={product.image} alt={product.name} />
          </div>

          <div className="shoe-info">
            <h2>{product.brand}</h2>
            <h1>{product.name}</h1>
            <p>{formatPrice(product.priceValue)}</p>
          </div>
        </div>
      </Link>

      <div className="size-selector">
        <select className="size-dropdown" value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="">Select size</option>
          {SIZES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <button className="AddtoCart" onClick={handleAdd}>
        <div className="cart">
          <img src="/Images/Add to cart 1.png" alt="" />
          <p>Add to Cart</p>
        </div>
      </button>
    </div>
  )
}
