import { Link } from 'react-router-dom'

const CATEGORIES = ['Nike', 'Reebok', 'New Balance']
const SOCIALS = ['Facebook', 'Instagram', 'Youtube', 'Twitter']

export default function Footer() {
  return (
    <section id="Contacts">
      <div className="contacts_container">
        <div className="contacts_left">
          <div className="contacts_logo">
            <img src="/Images/nxtstep logo 2.png" alt="" />
            <p>NxtStep PH</p>
          </div>

          <div className="contact_us">
            <h1>Contact Us!</h1>
            <div className="email">
              <a href="mailto:NxtStepPH@gmail.com">
                <div id="email"><p>NxtStepPH@gmail.com</p></div>
                <div id="arrow">→</div>
              </a>
            </div>
          </div>
        </div>

        <div className="contacts_right">
          <div id="Company">
            <h2>Company</h2>
            <ul>
              <li><a href="#Home">Home</a></li>
              <li><Link to="/products">Products</Link></li>
              <li><a href="#About_Us">About Us</a></li>
            </ul>
          </div>

          <div id="Categories">
            <h2>Categories</h2>
            <ul>
              {CATEGORIES.map((name) => (
                <li key={name}>
                  <Link to={`/products?brand=${encodeURIComponent(name)}`}>{name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div id="Social">
            <h2>Social</h2>
            <ul>
              {SOCIALS.map((name) => (
                <li key={name}><a href="#">{name}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom">
        <div className="line"></div>
        <div className="terms">
          <div><p>© NxtStep PH</p></div>
          <div id="termscondition"><p>Terms &amp; Condition</p></div>
        </div>
      </div>
    </section>
  )
}
