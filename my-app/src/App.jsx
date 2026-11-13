import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import ShopLayout from './components/ShopLayout'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

// Start each new page at the top (but let #anchor links like #About_Us work).
function ScrollToTop() {
  const { pathname, search, hash } = useLocation()
  useEffect(() => {
    // 'instant' because the page has CSS smooth scrolling, which would otherwise
    // animate all the way up from the bottom of the previous page.
    if (!hash) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, search, hash])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Every page below shares the dark header */}
        <Route element={<ShopLayout />}>
          <Route path="/products" element={<ProductList />} />
          <Route path="/new-arrivals" element={<ProductList onlyNew />} />
          <Route path="/shoe/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
