import {
  ArrowDropDownOutlined,
  LocationOn,
  SearchOutlined,
} from "@mui/icons-material"
import "./navbar.scss"
import { Link, NavLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { logoutUser } from "../../../redux/slices/authSlice"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const NavBar = () => {
  const auth = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  return (
    <div className="navBar">
      <div className="left">
        <Link to="/">
          <div className="logo">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt=""
            />
          </div>
        </Link>
        <div className="search">
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
      <div className="right">
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
              <span>Log in</span>
            </NavLink>
            <NavLink
              to="/signup"
              className="navLink"
            >
              <span>Sign Up</span>
            </NavLink>
          </>
        )}
      </div>
    </div>
  )
}

export default NavBar
