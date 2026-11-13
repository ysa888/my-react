import { useCallback, useEffect, useMemo, useState } from 'react'
import { CartContext } from './CartContext'
import { getProductById, SHIPPING_FEE } from '../data/products'

// New key on purpose: the old HTML site saved a differently-shaped "cart".
const STORAGE_KEY = 'nxtstep-cart'

function loadCart() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

// The cart only stores { id, size, quantity }. Name, image and price are always
// looked up from data/products.js, so they can never go out of date.
export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {
      /* storage full / blocked: the cart still works for this session */
    }
  }, [items])

  const addItem = useCallback((id, size) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === id && i.size === size)
      if (existing) {
        return prev.map((i) => (i === existing ? { ...i, quantity: i.quantity + 1 } : i))
      }
      return [...prev, { id, size, quantity: 1 }]
    })
  }, [])

  const changeQuantity = useCallback((id, size, delta) => {
    setItems((prev) =>
      prev
        .map((i) => (i.id === id && i.size === size ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0),
    )
  }, [])

  const removeItem = useCallback((id, size) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.size === size)))
  }, [])

  const value = useMemo(() => {
    const lines = items
      .map((i) => ({ ...i, product: getProductById(i.id) }))
      .filter((l) => l.product)
    const subtotal = lines.reduce((sum, l) => sum + l.product.priceValue * l.quantity, 0)
    const shipping = lines.length ? SHIPPING_FEE : 0
    return {
      lines,
      count: lines.reduce((n, l) => n + l.quantity, 0),
      subtotal,
      shipping,
      total: subtotal + shipping,
      addItem,
      changeQuantity,
      removeItem,
    }
  }, [items, addItem, changeQuantity, removeItem])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
