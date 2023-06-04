import { ArrowBack, ArrowForward } from "@mui/icons-material"
import "./carousel.scss"
import { items } from "./carouselApi"

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carouselContainer">
        <h2>Inspiration for your first order</h2>
        <div className="arrowBack">
          <ArrowBack className="arrowIcon" />
        </div>
        <div className="itemContainer">
          {items.map((item) => {
            return (
              <div
                key={item.id}
                className="imgContainer"
              >
                <img
                  src={item.image}
                  alt=""
                />
                <h3>{item.title}</h3>
              </div>
            )
          })}
        </div>
        <div className="arrowForward">
          <ArrowForward className="arrowIcon" />
        </div>
      </div>
    </div>
  )
}

export default Carousel
