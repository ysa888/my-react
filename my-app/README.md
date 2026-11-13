# NxtStep PH

React (Vite) version of the NxtStep PH shoe store. Converted from the original
plain HTML/CSS/JS site.

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # production build in dist/
pnpm lint
```

## Pages (React Router)

| URL                        | Page                                        |
| -------------------------- | ------------------------------------------- |
| `/`                        | Home                                        |
| `/products`                | All products (`?brand=Nike`, `Reebok`, `New Balance`) |
| `/new-arrivals`            | New arrivals                                |
| `/shoe/:id`                | Product page, e.g. `/shoe/jogger-lite-black` |
| `/cart`                    | Cart                                        |

## Where things live

```
public/Images/      all pictures (referenced as /Images/...)
src/data/products.js   every product, in ONE place. Add a shoe here and it shows up everywhere
src/context/        cart state (saved in localStorage under "nxtstep-cart")
src/components/     ShopLayout (shared header), ProductCard, home/ sections
src/pages/          Home, ProductList, ProductDetail, Cart, NotFound
src/styles/         the old CSS, one file per page, each scoped under its own class
```

The old site's CSS files were all loaded globally, so rules from different pages
(`#intro`, `.image-frame`, `header`, `*` ...) would clash in a single-page app.
Each stylesheet is therefore prefixed with its page class (`.page-home`,
`.page-products`, `.page-shoe`, `.page-cart`, `.shop-layout`).
