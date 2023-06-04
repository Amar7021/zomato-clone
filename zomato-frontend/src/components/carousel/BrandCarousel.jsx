import { ArrowBack, ArrowForward } from "@mui/icons-material"
import { brands } from "./carouselApi"
import "./brandCarousel.scss"

const BrandCarousel = () => {
  return (
    <div className="brandCarousel">
      <div className="brandContainer">
        <h2>Top brands for you</h2>
        <div className="itemContainer">
          <div className="arrowBack">
            <ArrowBack className="arrowIcon" />
          </div>
          {brands.map((brand) => {
            return (
              <div
                key={brand.id}
                className="imgContainer"
              >
                <img
                  src={brand.image}
                  alt=""
                />
                <h3>{brand.title}</h3>
                <h4>{brand.time} min</h4>
              </div>
            )
          })}
          <div className="arrowForward">
            <ArrowForward className="arrowIcon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BrandCarousel
