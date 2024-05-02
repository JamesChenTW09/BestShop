import "../../Style/TourBlock/TourBlockDetailItem.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar as clickStar } from '@fortawesome/free-solid-svg-icons'
import {faStar as unClickStar } from '@fortawesome/free-regular-svg-icons'
import React from "react";
import { TourSubObjectItem } from '../../Types/Types';

const TourBlockDetailItem: React.FC<{data:TourSubObjectItem}> = ({data}) => {
  const {index, name, price, stars } = data;
  const itemIndex = Number(index) +1;

  const renderStars = () => {
    const starCountArr = [1, 2, 3, 4, 5];
    return starCountArr.map((star, index) => (
      <FontAwesomeIcon key={index} icon={star <= stars ? clickStar : unClickStar} className="navIcons" />
    ));
  };
  return (
    <div className='tourBlockDetailItemContainer'>
        <div className='tourBlockDetailItemTitle'>
          <span className="tourBlockDetailItemText">{itemIndex}.</span>
          <span className="tourBlockDetailItemText">{name}</span>
          <div className='tourBlockDetailStarContainer'>
            {renderStars()}
          </div>
        </div>
        <div className="tourBlockDetailItemPrice">
          ${price}
        </div>
    </div>
  )
}
export default TourBlockDetailItem;