import "../../Style/TourBlock/TourBlockDetailItem.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar as clickStar } from '@fortawesome/free-solid-svg-icons'
import {faStar as unClickStar } from '@fortawesome/free-regular-svg-icons'


export default function TourBlockDetailItem({data}) {
  const {index, name, price, stars } = data;
  const starCountArr = [1,2,3,4,5];
  const itemIndex = Number(index) +1;
  return (
    <div className='tourBlockDetailItemContainer'>
        <div className='tourBlockDetailItemTitle'>
          <span className="tourBlockDetailItemText">{itemIndex}.</span>
          <span className="tourBlockDetailItemText">{name}</span>
          <div className='tourBlockDetailStarContainer'>
              {starCountArr.map(star=>{
                  return <FontAwesomeIcon icon={star <= stars? clickStar:unClickStar} className="navIcons" />
              })}
          </div>
        </div>
        <div className="tourBlockDetailItemPrice">
          ${price}
        </div>
    </div>
  )
}
