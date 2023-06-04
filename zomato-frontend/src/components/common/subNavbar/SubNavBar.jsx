import { Link } from "react-router-dom"
import "./subNavBar.scss"
import { KeyboardArrowDown, Tune } from "@mui/icons-material"

const SubNavBar = () => {
  return (
    <div className="subNavBar">
      <p>Home / India / Mumbai / Navi Mumbai Restaurants</p>
      <div className="nav">
        <Link className="link">
          <div className="deliverySection">
            <div className="deliveryImg">
              <img
                src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                alt=""
              />
            </div>
            <h2 className="deliveryHeading">Delivery</h2>
          </div>
        </Link>
        <div className="diningSection">
          <div className="diningImg">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
              alt=""
            />
          </div>
          <h2>Dining Out</h2>
        </div>
        <div className="nightLifeSection">
          <div className="nightLifeImg">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
              alt=""
            />
          </div>
          <h2>Night Life</h2>
        </div>
      </div>
      <div className="option">
        <div className="filter">
          <Tune className="tuneIcon" />
          <span>Filters</span>
        </div>
        <div className="rating">
          <span>Rating: 4.0+</span>
        </div>
        <div className="menu">
          <span>Pure Veg</span>
        </div>
        <div className="cuisine">
          <span>Cuisines</span>
          <KeyboardArrowDown className="arrowIcon" />
        </div>
      </div>
    </div>
  )
}

export default SubNavBar
