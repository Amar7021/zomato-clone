import { useNavigate } from "react-router-dom";
import "./pageNotFound.scss";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="pageNotFound">
      <div className="error-page">
        <h1>Error 404 - Page not found</h1>
        <p>
          Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the
          home page.
        </p>
        <button className="btn" onClick={() => navigate("/")}>
          Zomato Home
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
