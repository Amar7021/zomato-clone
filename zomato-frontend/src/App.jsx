import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./pages/home/Home"
import OrderOnline from "./pages/orderOnline/OrderOnline"
import PageNotFound from "./components/pageNotFound/PageNotFound"
import Login from "./pages/login/Login"
import SignUp from "./pages/register/SignUp"
import { ToastContainer } from "react-toastify"

const App = () => {
  return (
    <>
      <Router>
        <ToastContainer />
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/signup"
            element={<SignUp />}
          />
          <Route
            path="/orderonline"
            element={<OrderOnline />}
          />
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
