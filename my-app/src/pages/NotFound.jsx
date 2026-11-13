import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle'
import '../styles/products.css'

export default function NotFound() {
  useDocumentTitle('NxtStep PH | Page not found')
  return (
    <div className="page-products">
      <div id="intro">
        <h1>Page not found</h1>
        <p>
          That page doesn&apos;t exist. <Link to="/products">Browse all products</Link>
        </p>
      </div>
    </div>
  )
}
