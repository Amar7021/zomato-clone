import { StarRate } from "@mui/icons-material"
import { restaurants } from "../../api/restaurantData"
import "./orderFood.scss"

const OrderFood = () => {
  return (
    <div className="orderFood">
      <h2>Order food online in Millenium Tower, Seawoods</h2>
      <div className="restroWrapper">
        {restaurants.map((restaurant) => {
         return <div
            className="restroContainer"
            key={restaurant.id}
          >
            <div className="imgContainer">
              <img
                src={restaurant.img}
                alt=""
              />
            </div>
            <span className="floatOnImgLeft">{restaurant.discount}% OFF upto 100</span>
            <span className="floatOnImgRight">{restaurant.time} min</span>
            <div className="restroName">
              <h4>{restaurant.name}</h4>
              <div className="rating">
              <span>{restaurant.rating}<StarRate className="starIcon"/></span>
              </div>
            </div>
            <div className="menu">
              <span>{restaurant.dish}</span>
              <span>&#8377;{restaurant.amount} for one</span>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default OrderFood
