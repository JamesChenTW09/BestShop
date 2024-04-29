import "../../Style/TourBlock/TourBlock.scss"
import React from "react";

const TempTourBlock: React.FC = () => {
  return (
    <section className='tourBlockItemContainer'> 
        <div className='tourBlockItem' >
            <div className='tourItemImgContainer' style={{height:"340px"}}></div>
        </div>
    </section>
  )
}
export default TempTourBlock;