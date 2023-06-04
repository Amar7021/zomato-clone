import { KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material"
import "./popular.scss"

const Popular = () => {
  return (
    <div className="popular">
      <h2>
        Popular localities in and around <strong>Mumbai</strong>
      </h2>
      <div className="popularLocality">
        <div className="locality">
          <h3>Lower Parel</h3>
          <p>412 places</p>
          <KeyboardArrowRight className="keyArrowIcon" />
        </div>
        <div className="locality">
          <h3>Powai</h3>
          <p>370 places</p>
          <KeyboardArrowRight className="keyArrowIcon" />
        </div>
        <div className="locality">
          <h3>Malad West</h3>
          <p>812 places</p>
          <KeyboardArrowRight className="keyArrowIcon" />
        </div>
        <div className="locality">
          <h3>Vashi</h3>
          <p>325 places</p>
          <KeyboardArrowRight className="keyArrowIcon" />
        </div>
        <div className="locality">
          <h3>Seawoods</h3>
          <p>470 places</p>
          <KeyboardArrowRight className="keyArrowIcon" />
        </div>
        <div className="locality seeMore">
          <h3 className="localityHeading">See more</h3>
          <KeyboardArrowDown className="keyArrowIcon" />
        </div>
      </div>
    </div>
  )
}

export default Popular
