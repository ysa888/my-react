import { Link, useNavigate } from 'react-router-dom'
import { getProductById } from '../../data/products'

const HERO_PRODUCT_ID = 'nike-fly-by-mid-3-black-white'

// Clickable outline of the shoe in the hero picture (coordinates from the old image map).
const SHOE_OUTLINE =
  '6,509,14,551,50,575,114,560,196,540,273,506,333,495,471,465,555,437,655,384,710,348,690,320,668,291,640,248,621,200,601,154,582,134,562,120,538,123,520,140,488,138,451,148,422,156,400,163,394,183,401,212,397,229,370,186,332,194,308,208,299,229,255,217,216,222,191,241,193,258,170,241,186,299,172,344,121,404,50,467,22,489'

export default function Hero() {
  const navigate = useNavigate()
  const hero = getProductById(HERO_PRODUCT_ID)
  const heroPath = `/shoe/${hero.id}`

  return (
    <div className="top-section">
      <div className="left_side">
        <div className="text_block">
          <h1 id="white">
            ELEVATE
            <br />
            <span>YOUR STEP</span>
          </h1>
          <p>
            Shoes that work as hard as you do. Whether for style or performance, we’ve got the
            perfect pair for you.
          </p>
          <div className="first_buttons">
            <Link to="/products">
              <button className="page1_Button1">SHOP NOW</button>
            </Link>
            <a href="#Brands">
              <button className="page1_Button2">EXPLORE</button>
            </a>
          </div>
        </div>
      </div>

      <div className="right_side">
        <div className="radient"></div>
        <img src="/Images/Shoes/NikeFly.png" useMap="#image-map" alt={hero.name} />
        <map name="image-map">
          <area
            alt={hero.name}
            title={hero.name}
            href={heroPath}
            shape="poly"
            coords={SHOE_OUTLINE}
            onClick={(e) => {
              e.preventDefault()
              navigate(heroPath)
            }}
          />
        </map>
        <div id="Advert_Site">
          <div className="advert_tag">
            <h1>{hero.name}</h1>
            <p>Available Now</p>
          </div>
        </div>
      </div>
    </div>
  )
}
