import React from 'react'
import {FaStar,FaStarHalfAlt} from "react-icons/ai"
import {AiOutlineStar} from "react-icons/ai"
const star = ({stars, review}) => {
    console.log("stars.js",star);
  Array.from({length:5},(elem, index)=>{

    let number =index+0.5;
    return(
        <span key={index}>
                {
                    stars>=index+1
                    ?< FaStar className="icon"/>
                    :stars>=numbers
                    ?<FaStarHalfAlt className="icon"/>
                    :<AiOutlineStar className="icon"/>

                
                }
        </span>
    )

  })  ;
  return (
  <Wrapper>
      <div className="icon-style"> 

{ratingStar}
      </div>
  </Wrapper>
  )
}

export default star