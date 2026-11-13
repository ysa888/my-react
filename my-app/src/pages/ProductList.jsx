import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { products } from '../data/products'
import '../styles/products.css'

// Serves both /products (optionally ?brand=Nike) and /new-arrivals.
export default function ProductList({ onlyNew = false }) {
  const [params] = useSearchParams()
  const brand = params.get('brand') ?? 'All'
  const q = (params.get('q') ?? '').trim().toLowerCase()

  let title = 'All Products'
  let list = products
  if (onlyNew) {
    title = 'New Arrivals'
    list = products.filter((p) => p.isNew)
  } else if (brand !== 'All') {
    title = `${brand} Products`
    list = products.filter((p) => p.brand === brand)
  }

  if (q) {
    title = `Results for “${params.get('q').trim()}”`
    list = list.filter((p) => `${p.brand} ${p.name}`.toLowerCase().includes(q))
  }

  useDocumentTitle(`NxtStep PH | ${title}`)

  return (
    <div className="page-products">
      <div id="intro">
        <h1>{title}</h1>
        <p>{q ? `${list.length} product${list.length === 1 ? "" : "s"} found.` : "Browse our full collection of stylish and comfortable shoes for men, women, and kids."}</p>
      </div>

      <section id="products-area" className="js-product-area">
        {list.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      {list.length === 0 && <p className="empty-state">No products found.</p>}
    </div>
  )
}
