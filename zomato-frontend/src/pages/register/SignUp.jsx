import { Link, useNavigate } from "react-router-dom"
import "./signUp.scss"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../../redux/slices/authSlice"

const SignUp = () => {
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

    dispatch(registerUser(user))
  }

  return (
    <div className="signUp">
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
          <h1>Sign up</h1>
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
            {auth.registerStatus === "pending" ? "Submitting" : "Sign up"}
          </button>
          {auth.registerStatus === "rejected" ? (
            <p className="error">{auth.registerError}</p>
          ) : null}
        </form>
      </div>
    </div>
  )
}

export default SignUp
