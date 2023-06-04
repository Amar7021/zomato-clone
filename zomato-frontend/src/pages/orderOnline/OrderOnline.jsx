import BrandCarousel from "../../components/carousel/BrandCarousel"
import Carousel from "../../components/carousel/Carousel"
import Footer from "../../components/common/footer/Footer"
import NavBar from "../../components/common/navbar/Navbar"
import SubNavBar from "../../components/common/subNavbar/SubNavBar"
import Explore from "../../components/homeComponents/explore/Explore"
import OrderFood from "../../components/orderFood/OrderFood"
import "./orderOnline.scss"

const OrderOnline = () => {
  return (
    <div className="orderOnline">
      <NavBar />
      <SubNavBar />
      <Carousel />
      <BrandCarousel />
      <OrderFood />
      <Explore />
      <Footer />
    </div>
  )
}

export default OrderOnline
