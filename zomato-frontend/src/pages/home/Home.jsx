import GetApp from "../../components/homeComponents/getApp/GetApp"
import Footer from "../../components/common/footer/Footer"
import Collection from "../../components/homeComponents/collection/Collection"
import Explore from "../../components/homeComponents/explore/Explore"
import Hero from "../../components/homeComponents/hero/Hero"
import Popular from "../../components/homeComponents/popuplar/Popular"
import "./home.scss"

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Collection />
      <Popular />
      <GetApp />
      <Explore />
      <Footer />
    </div>
  )
}

export default Home
