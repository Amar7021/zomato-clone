import { Link, useNavigate } from "react-router-dom"
import "./login.scss"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loginUser } from "../../redux/slices/authSlice"

const Login = () => {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    if (auth._id) {
      navigate("/")
    }
  }, [auth._id, navigate])

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(loginUser(user))
  }

  return (
    <div className="login">
      <Link to="/">
        <div className="logo">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt=""
          />
        </div>
      </Link>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Log in</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button className="loginButton">
            {auth.loginStatus === "pending" ? "Submitting" : "Log in"}
          </button>
          {auth.loginStatus === "rejected" ? (
            <p className="error">{auth.loginError}</p>
          ) : null}
        </form>
      </div>
    </div>
  )
}

export default Login
