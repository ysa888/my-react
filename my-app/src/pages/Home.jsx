import HomeHeader from '../components/home/HomeHeader'
import Hero from '../components/home/Hero'
import Brands from '../components/home/Brands'
import NewArrivals from '../components/home/NewArrivals'
import Featured from '../components/home/Featured'
import AboutUs from '../components/home/AboutUs'
import Footer from '../components/home/Footer'
import useDocumentTitle from '../hooks/useDocumentTitle'
import '../styles/home.css'

export default function Home() {
  useDocumentTitle('NxtStep PH | Home')

  return (
    <div className="page-home">
      <HomeHeader />

      <section id="Home">
        <Hero />
        <Brands />
      </section>

      <NewArrivals />
      <Featured />
      <AboutUs />
      <Footer />
    </div>
  )
}
