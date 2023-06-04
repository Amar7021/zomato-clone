import {
  ArrowDropDownOutlined,
  MobileFriendly,
  SearchOutlined,
  LocationOn,
} from "@mui/icons-material"
import "./hero.scss"
import { NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "../../../redux/slices/authSlice"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Hero = () => {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  return (
    <div className="hero">
      <div className="topbar">
        <div className="left">
          <span>
            <MobileFriendly className="mobileIcon" /> Get the App
          </span>
        </div>
        <div className="right">
          <span>Investor Relation</span>
          <span>Add Restaurant</span>
          {auth._id ? (
            <span
              onClick={() => {
                dispatch(logoutUser(null))
                toast.success("🦄 Logout Successfull!", {
                  position: "bottom-right",
                  autoClose: 3000,
                  closeOnClick: true,
                  draggable: true,
                  theme: "colored",
                })
              }}
            >
              Logout
            </span>
          ) : (
            <>
              <NavLink
                to="/login"
                className="navLink"
              >
                <span>Login</span>
              </NavLink>
              <NavLink
                to="/signup"
                className="navLink"
              >
                <span>Sign up</span>
              </NavLink>
            </>
          )}
        </div>
      </div>
      <div className="search">
        <img
          src="https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png"
          alt=""
        />
        <h1>Discover the best food & drinks in Mumbai</h1>
        <div className="searchWrapper">
          <div className="locationSearch">
            <LocationOn className="locationIcon" />
            <input
              type="text"
              placeholder="Mumbai"
              className="locationInput"
            />
            <ArrowDropDownOutlined className="arrowIcon" />
          </div>
          <div className="searchBar">
            <SearchOutlined className="searchIcon" />
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="searchInput"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
