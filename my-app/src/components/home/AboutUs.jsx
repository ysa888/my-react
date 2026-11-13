import { Link } from 'react-router-dom'

export default function AboutUs() {
  return (
    <section id="About_Us">
      <div className="Reviews">
        <img src="/Images/Reviews.png" alt="Customer reviews" />
      </div>

      <div className="information">
        <div className="navigation">
          <ul className="navlinks">
            <li><a href="#">Home</a></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/new-arrivals">What&apos;s New</Link></li>
            <li><a href="#About_Us">About us</a></li>
          </ul>
        </div>

        <div className="text">
          <p id="topic">About Us</p>

          <h1>
            &quot;Every Pair tells a Story, and the <span>Right Buyer</span> Completes the
            Chapter.&quot;
          </h1>

          <p id="description">
            At NxtStep PH, we buy and sell authentic, high-quality shoes, bringing you the best
            styles from top brands. We guarantee 100% original footwear for every sneakerhead and
            trendsetter.
          </p>
        </div>
      </div>
    </section>
  )
}
