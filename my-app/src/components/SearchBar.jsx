import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

// Shared search input. Submitting (Enter) goes to /products?q=...
// On /products it also filters live as you type.
export default function SearchBar({ className, live = false }) {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const urlQuery = params.get('q') ?? ''
  const [value, setValue] = useState(urlQuery)

  // Keep the box in sync when the URL changes (back button, nav links),
  // without clobbering what the person is typing (e.g. trailing spaces).
  const [prevQuery, setPrevQuery] = useState(urlQuery)
  if (prevQuery !== urlQuery) {
    setPrevQuery(urlQuery)
    if (value.trim() !== urlQuery) setValue(urlQuery)
  }

  const go = (q) => {
    const trimmed = q.trim()
    navigate(trimmed ? `/products?q=${encodeURIComponent(trimmed)}` : '/products', {
      replace: live,
    })
  }

  return (
    <form
      className="search-form"
      role="search"
      onSubmit={(e) => {
        e.preventDefault()
        go(value)
      }}
    >
      <input
        className={className}
        type="search"
        placeholder="Search"
        aria-label="Search products"
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          if (live) go(e.target.value)
        }}
      />
    </form>
  )
}
