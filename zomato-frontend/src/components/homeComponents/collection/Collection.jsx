import { ArrowRight } from "@mui/icons-material"
import { Link } from "react-router-dom"
import "./collection.scss"

const Collection = () => {
  return (
    <div className="collection">
      <div className="imgCollections">
        <Link
          to="/orderonline"
          className="links"
        >
          <div className="imgCollection">
            <img
              src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg"
              alt=""
            />
            <h3>Order Online</h3>
            <p>Stay home and order to your doorstep</p>
          </div>
        </Link>
        <div className="imgCollection">
          <img
            src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg"
            alt=""
          />
          <h3>Dining</h3>
          <p>View the city&apos;s favourite dining venues</p>
        </div>
        <div className="imgCollection">
          <img
            src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg"
            alt=""
          />
          <h3>Nightlife and Clubs</h3>
          <p>Explore the city&apos;s top nightlife outlets</p>
        </div>
      </div>
      <div className="exploreCollection">
        <h2>Collections</h2>
        <div className="heading">
          <span className="collectionHeading">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Mumbai, based on trends
          </span>
          <span className="exploreLocation">All collections in Mumbai</span>
          <span className="exploreLocation">
            <ArrowRight className="arrowIcon" />
          </span>
        </div>
        <div className="exploreImg">
          <div className="exploreImgCollection">
            <img
              src="https://b.zmtcdn.com/data/collections/e001bf04df21d6d29048e8507a1fab80_1674825025.jpg"
              alt=""
            />
            <div className="explorePlaces">
              <h3>17 Best Luxury Dining Places</h3>
              <div className="noOfPlace">
                <span>17 Places</span>
                <span>
                  <ArrowRight className="arrowrightIcon" />
                </span>
              </div>
            </div>
          </div>
          <div className="exploreImgCollection">
            <img
              src="https://b.zmtcdn.com/data/collections/1b191329f2c37a474c428131841d488b_1674826227.jpg"
              alt=""
            />
            <div className="explorePlaces">
              <h3>13 Sea Viewing Dining Places</h3>
              <div className="noOfPlace">
                <span>13 Places</span>
                <span>
                  <ArrowRight className="arrowrightIcon" />
                </span>
              </div>
            </div>
          </div>
          <div className="exploreImgCollection">
            <img
              src="https://b.zmtcdn.com/data/collections/888af0efb05704bb3fcb19b14977b5b9_1685700689.png"
              alt=""
            />
            <div className="explorePlaces">
              <h3>16 Vibrant Places for Pride</h3>
              <div className="noOfPlace">
                <span>17 Places</span>
                <span>
                  <ArrowRight className="arrowrightIcon" />
                </span>
              </div>
            </div>
          </div>
          <div className="exploreImgCollection">
            <img
              src="https://b.zmtcdn.com/data/collections/b90a3bc172dab4f5befb3389950ffcab_1674824072.jpg"
              alt=""
            />
            <div className="explorePlaces">
              <h3>6 Unique Dining Experience</h3>
              <div className="noOfPlace">
                <span>17 Places</span>
                <span>
                  <ArrowRight className="arrowrightIcon" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection
