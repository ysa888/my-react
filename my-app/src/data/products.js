// Single source of truth for every product on the site.
// (Merged from the old scripts/products.js and scripts/new arrivals.js)
//   image       - picture used on listing pages and in the cart
//   detailImage - optional bigger picture for the product page
//   homeImage   - optional picture used on the Home page cards
//   buyLink     - where the "Buy Now" button sends the customer

export const BRANDS = ['Nike', 'Reebok', 'New Balance']

export const products = [
  {
    "id": "jogger-lite-black",
    "brand": "Reebok",
    "name": "Jogger Lite Black",
    "priceValue": 1090,
    "isNew": true,
    "bgColor": "#DFDFDF",
    "image": "/Images/Shoes/Jogger Lite Black 2.png",
    "homeImage": "/Images/Shoes/Jogger Lite Black.png",
    "buyLink": "https://www.amazon.com/Reebok-Mens-Jogger-Lite-Sneaker/dp/B0D7QX47NC"
  },
  {
    "id": "jogger-lite-burgundy",
    "brand": "Reebok",
    "name": "Jogger Lite Burgundy",
    "priceValue": 1090,
    "isNew": true,
    "bgColor": "#FFB8B3",
    "image": "/Images/Shoes/Jogger Lite Burgundy2.png",
    "homeImage": "/Images/Shoes/Jogger Lite Burgundy.png",
    "buyLink": "https://www.zalora.com.ph/p/reebok-jogger-lite-black-3606139"
  },
  {
    "id": "stridium-2-0-grey",
    "brand": "Reebok",
    "name": "Stridium 2.0 “Grey”",
    "priceValue": 1790,
    "isNew": true,
    "bgColor": "#DCDEDE",
    "image": "/Images/Shoes/Stridium 2.0 Grey.png",
    "homeImage": "/Images/Shoes/Stridium 2.0 Grey-alt.png",
    "buyLink": "https://shopee.ph/Original-Reebok-stridium-2.0-Men's-Sports-shoes-gray-walking-shoes-i.1247780240.29302622736"
  },
  {
    "id": "stridium-2-0-black",
    "brand": "Reebok",
    "name": "Stridium 2.0 “Black”",
    "priceValue": 990,
    "isNew": true,
    "bgColor": "#DFDFDF",
    "image": "/Images/Shoes/Stridium 2.0 Black.png",
    "buyLink": "https://shopee.ph/Original-Reebok-stridium-2.0-Men's-Sports-shoes-gray-walking-shoes-i.1247780240.29302622736"
  },
  {
    "id": "nike-fly-by-mid-3-black-white",
    "brand": "Nike",
    "name": "Nike Fly.By Mid 3 Black/White",
    "priceValue": 1090,
    "isNew": true,
    "bgColor": "#E6E6E6",
    "image": "/Images/Shoes/Nike Fly.By Mid 3 BlackWhite.png",
    "buyLink": "https://www.nike.com/ph/t/flyby-mid-3-basketball-shoes-jFHsxb?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    "id": "jordan-38-white-metallic-gold",
    "brand": "Nike",
    "name": "Jordan 38 “White Metallic Gold”",
    "priceValue": 3890,
    "isNew": false,
    "bgColor": "#E3E3E3",
    "image": "/Images/Shoes/Jordan 38 White Metallic Gold.png",
    "detailImage": "/Images/Shoes/7 1 (1).png",
    "homeImage": "/Images/Shoes/Jordan 38.png",
    "buyLink": "https://www.nike.com/ph/t/air-jordan-xxxviii-low-pf-basketball-shoes-2lBnKn?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    "id": "nike-impact-3-black-grey",
    "brand": "Nike",
    "name": "Nike Impact 3 “Black Grey”",
    "priceValue": 1690,
    "isNew": false,
    "bgColor": "#A0A0A0",
    "image": "/Images/Shoes/Nike Impact 3 Black Grey2.png",
    "detailImage": "/Images/Shoes/6 1 (2).png",
    "homeImage": "/Images/Shoes/Nike Impact 3 Black Grey.png",
    "buyLink": "https://www.goat.com/sneakers/air-max-impact-3-cool-grey-dc3725-002"
  },
  {
    "id": "nike-kd-trey-5-x-green-strike",
    "brand": "Nike",
    "name": "Nike KD Trey 5 X “Green Strike”",
    "priceValue": 1790,
    "isNew": false,
    "bgColor": "#D9FFCC",
    "image": "/Images/Shoes/Nike KD Trey 5 X Green Strike.png",
    "detailImage": "/Images/Shoes/8 1 (2).png",
    "homeImage": "/Images/Shoes/Nike KD Trey 5 X Green Strike-alt.png",
    "buyLink": "https://www.kickscrew.com/en-PH/products/nike-kd-trey-5-x-ep-dj7554-014"
  },
  {
    "id": "giannis-immortality-3-photo-blue",
    "brand": "Nike",
    "name": "Giannis Immortality 3 “Photo Blue”",
    "priceValue": 2290,
    "isNew": false,
    "bgColor": "#7FD0FF",
    "image": "/Images/Shoes/Giannis Immortality 3 Photo Blue.png",
    "detailImage": "/Images/Shoes/2 1 (1).png",
    "buyLink": "https://www.zeus.ph/products/nike-mens-giannis-immortality-3-ep-photo-blue-black-barely-volt-white-dz7534-400"
  },
  {
    "id": "giannis-immortality-4-halloween",
    "brand": "Nike",
    "name": "Giannis Immortality 4 “Halloween”",
    "priceValue": 2690,
    "isNew": false,
    "bgColor": "#FFC192",
    "image": "/Images/Shoes/Giannis Immortality 4 Halloween.png",
    "detailImage": "/Images/Shoes/4 1 (1).png",
    "buyLink": "https://www.nike.com/ph/t/giannis-immortality-4-halloween-ep-basketball-shoes-4MTsCH/FQ3681-301?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    "id": "freak-4-indigo-haze",
    "brand": "Nike",
    "name": "Freak 4 “Indigo Haze”",
    "priceValue": 3590,
    "isNew": false,
    "bgColor": "#97EEC6",
    "image": "/Images/Shoes/Freak 4 Indigo Haze.png",
    "detailImage": "/Images/Shoes/6 2 (1).png",
    "buyLink": "https://www.kickscrew.com/en-PH/products/nike-freak-4-dj6149-500"
  },
  {
    "id": "nike-g-t-cut-3-asheen-slate",
    "brand": "Nike",
    "name": "Nike G.T Cut 3 “Asheen Slate",
    "priceValue": 4990,
    "isNew": false,
    "bgColor": "#E2AEEB",
    "image": "/Images/Shoes/Nike G.T Cut 3 Asheen Slate.png",
    "detailImage": "/Images/Shoes/8 2 (1).png",
    "buyLink": "https://stockx.com/nike-air-zoom-gt-cut-3-ashen-slate?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    "id": "nike-elevate-3-white-green",
    "brand": "Nike",
    "name": "Nike Elevate 3 “White Green”",
    "priceValue": 1490,
    "isNew": false,
    "bgColor": "#D6DECB",
    "image": "/Images/Shoes/Nike Elevate 3 White Green.png",
    "detailImage": "/Images/Shoes/12 1 (1).png",
    "buyLink": "https://www.nike.com/ph/t/elevate-3-basketball-shoes-QT43Gj/DD9304-301"
  },
  {
    "id": "jordan-zion-3-pressure",
    "brand": "Nike",
    "name": "Jordan Zion 3 “Pressure”",
    "priceValue": 2990,
    "isNew": false,
    "bgColor": "#EEEEEE",
    "image": "/Images/Shoes/Jordan Zion 3 Pressure.png",
    "detailImage": "/Images/Shoes/16 1 (1).png",
    "buyLink": "https://stockx.com/air-jordan-zion-3-pressure?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    "id": "nike-cortez-sail-stadium-green",
    "brand": "Nike",
    "name": "Nike Cortez “Sail Stadium Green”",
    "priceValue": 2290,
    "isNew": false,
    "bgColor": "#B7F6DC",
    "image": "/Images/Shoes/Nike Cortez Sail Stadium Green.png",
    "detailImage": "/Images/Shoes/2 2 (1).png",
    "buyLink": "https://www.nike.com/ph/launch/t/womens-cortez-sail-and-stadium-green?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    "id": "nike-dunk-low-panda",
    "brand": "Nike",
    "name": "Nike Dunk Low “Panda”",
    "priceValue": 4590,
    "isNew": false,
    "bgColor": "#E8EBEB",
    "image": "/Images/Shoes/Nike Dunk Low Panda.png",
    "detailImage": "/Images/Shoes/4 2 (1).png",
    "buyLink": "https://solekicksph.com/products/nike-dunk-low-twist-panda"
  },
  {
    "id": "nike-airforce-1-low-black-anthracite",
    "brand": "Nike",
    "name": "Nike AirForce 1 Low “Black Anthracite”",
    "priceValue": 1990,
    "isNew": false,
    "bgColor": "#E4E4E4",
    "image": "/Images/Shoes/Nike AirForce 1 Low Black Anthracite.png",
    "detailImage": "/Images/Shoes/34 1 (1).png",
    "buyLink": "https://stockx.com/nike-air-force-1-low-07-fresh-black-anthracite?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    "id": "jordan-1-take-5-bred",
    "brand": "Nike",
    "name": "Jordan 1 Take 5 “Bred”",
    "priceValue": 2590,
    "isNew": false,
    "bgColor": "#FFB8B3",
    "image": "/Images/Shoes/Jordan 1 Take 5 Bred.png",
    "detailImage": "/Images/Shoes/10 3 (1).png",
    "buyLink": "https://www.nike.com/ph/t/jordan-one-take-5-pf-shoes-jNx9SV?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    "id": "nike-superrep-go-3-next-nature",
    "brand": "Nike",
    "name": "Nike SuperRep Go 3 Next Nature",
    "priceValue": 1790,
    "isNew": false,
    "bgColor": "#A1C6C2",
    "image": "/Images/Shoes/Nike SuperRep Go 3 Next Nature.png",
    "detailImage": "/Images/Shoes/26 1 (1).png",
    "buyLink": "https://www.nike.com/ph/t/superrep-go-3-flyknit-next-nature-workout-shoes-zKqgRc?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    "id": "nike-air-max-solo",
    "brand": "Nike",
    "name": "Nike Air Max Solo",
    "priceValue": 1990,
    "isNew": false,
    "bgColor": "#FFBBD2",
    "image": "/Images/Shoes/Nike Air Max Solo.png",
    "detailImage": "/Images/Shoes/42 1 (1).png",
    "buyLink": "https://www.nike.com/ph/t/air-max-nuaxis-shoes-2GDM9K/HF1233-600"
  },
  {
    "id": "nike-airforce-1-year-of-the-dragon",
    "brand": "Nike",
    "name": "Nike AirForce 1 “Year of the Dragon”",
    "priceValue": 1990,
    "isNew": false,
    "bgColor": "#D1E9DD",
    "image": "/Images/Shoes/Nike AirForce 1 Year of the Dragon.png",
    "detailImage": "/Images/Shoes/30 1 (1).png",
    "buyLink": "https://stockx.com/air-force-1-low-year-of-the-dragon-1?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    "id": "nike-airforce-1-low-heel-stitch",
    "brand": "Nike",
    "name": "Nike AirForce 1 Low “Heel Stitch”",
    "priceValue": 1990,
    "isNew": false,
    "bgColor": "#C1F5DA",
    "image": "/Images/Shoes/Nike AirForce 1 Low Heel Stitch.png",
    "detailImage": "/Images/Shoes/24 1 (1).png",
    "buyLink": "https://stockx.com/nike-air-force-1-low-lv8-3-heel-stitch-sail-stadium-green-gs?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
  {
    "id": "new-balance-574-burgundy",
    "brand": "New Balance",
    "name": "New Balance 574 “Burgundy”",
    "priceValue": 1990,
    "isNew": false,
    "bgColor": "#A1C6C2",
    "image": "/Images/Shoes/New Balance 574 Burgundy.png",
    "detailImage": "/Images/Shoes/16 2 (1).png",
    "buyLink": "https://www.newbalance.com/pd/574-core/WL574V3-40378.html?dwvar_WL574V3-40378_style=WL574EVM"
  },
  {
    "id": "nike-court-legacy-canvas",
    "brand": "Nike",
    "name": "Nike Court Legacy Canvas",
    "priceValue": 1990,
    "isNew": false,
    "bgColor": "#EBE9D5",
    "image": "/Images/Shoes/Nike Court Legacy Canvas.png",
    "detailImage": "/Images/Shoes/22 1 (1).png",
    "buyLink": "https://www.nike.com/ph/t/nikecourt-legacy-canvas-shoes-0wXxWF?msockid=01d32f8179836d4c05273b5578cd6c25"
  },
]

export const getProductById = (id) => products.find((p) => p.id === id)

export const SIZES = ['7.5', '8.5', '9', '10.5']
export const SHIPPING_FEE = 150
