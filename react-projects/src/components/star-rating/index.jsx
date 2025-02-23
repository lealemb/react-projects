
import {FaStar}  from 'react-icons/fa'


export default function StarRating({ noOfStars = 5 }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    function handleClick(getCurrentIndex){


    }

    function handleMouseEnter(){


    }

    function handleMouseLeave(){

    }
return <div className="star-rating"> 
          {
            [ ...Array(noOfStars)].map((_, index) => {
                index += 1;

                return <FaStar 
                key={index}
                onClick={()=> handleClick(index)}
                onMouseMove={()=> handleMouseEnter(index)}
                onMouseLeave={ ()=> handleMouseLeave(index)}
                size={40}
                />
            })

            ]
          }
     
</div>


}