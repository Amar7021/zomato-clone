import { Language } from "@mui/icons-material"
import "./footer.scss"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerTopLeft">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt=""
          />
        </div>
        <div className="footerTopRight">
          <div className="selectCountry">
            <img
              src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
              alt=""
            />
            <select
              name="country"
              id="country"
            >
              <option value="india">India</option>
            </select>
          </div>
          <div className="selectLanguage">
            <Language />
            <select
              name="language"
              id="language"
            >
              <option value="english">English</option>
            </select>
          </div>
        </div>
      </div>
      <div className="footerLinks">
        <div className="footerSections">
          <div className="footerSec1">
            <h4>ABOUT ZOMATO</h4>
            <li>Who We Are</li>
            <li>Blog</li>
            <li>Work With Us</li>
            <li>Investor Relations</li>
            <li>Report Fraud</li>
            <li>Contact Us</li>
          </div>
          <div className="footerSec2">
            <h4>ZOMAVERSE</h4>
            <li>Zomato</li>
            <li>Blinkit</li>
            <li>Feeding India</li>
            <li>Hyper Pure</li>
            <li>Zomaland</li>
          </div>
          <div className="footerSec3">
            <div className="subFotterSec1">
              <h4>FOR RESTAURANTS</h4>
              <li>Partner With Us</li>
              <li>Apps For You</li>
            </div>
            <div className="subFotterSec2">
              <h4>FOR ENTERPRISES</h4>
              <li>Zomato For Entrerprise</li>
            </div>
          </div>
          <div className="footerSec4">
            <h4>LEARN MORE</h4>
            <li>Privacy</li>
            <li>Security</li>
            <li>Terms</li>
            <li>Site Map</li>
          </div>
          <div className="socialLinks">
            <h4>SOCIAL LINKS</h4>
            <div className="social">
              <li>
                <i className="fa-brands fa-linkedin"></i>
              </li>
              <li>
                <i className="fa-brands fa-square-instagram"></i>
              </li>
              <li>
                <i className="fa-brands fa-square-twitter"></i>
              </li>
              <li>
                <i className="fa-brands fa-youtube"></i>
              </li>
              <li>
                <i className="fa-brands fa-facebook"></i>
              </li>
            </div>
            <div className="appImg">
              <img
                src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                alt=""
              />
              <img
                src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footerEnd">
        <p>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-{new Date().getFullYear()}{" "}
          &copy; Zomato&trade; Ltd. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
