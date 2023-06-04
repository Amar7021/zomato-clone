import "./getApp.scss"

const GetApp = () => {
  return (
    <div className="getApp">
      <img
        src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png"
        alt=""
      />
      <div className="appInput">
        <h1>Get the Zomato app</h1>
        <p>
          We will send you a link, open it on your phone to download the app
        </p>
        <input
          type="radio"
          className="radioBtn"
        />
        <label>Email</label>
        <input
          type="radio"
          className="radioBtn"
        />
        <label>Phone</label>
        <div className="inputShare">
          <input
            type="text"
            placeholder="Email"
          />
          <button className="btn">Share App Link</button>
        </div>
        <p className="downLoadApp">Download App from</p>
        <img
          className="downLoadImg"
          src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
          alt=""
        />
        <img
          className="downLoadImg"
          src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
          alt=""
        />
      </div>
    </div>
  )
}

export default GetApp
