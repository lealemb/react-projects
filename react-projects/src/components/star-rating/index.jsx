
import {FaStar}  from 'react-icons/fa'


export default function StarRating({ noOfStars }) {

return <div className="star-rating"> 
          {
            [ ...Array(noOfStars)].map((_, index) => {

                return <FaStar 
                key={index}
                onClick={}
                onMouseMove={}
                onMouseLeave={}
                size={40}
                />
            })

            ]
          }
     
</div>


}