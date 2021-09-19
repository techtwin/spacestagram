import React, {useState} from 'react'
import Heart from "react-animated-heart";

function SpaceCards({ cardObj }) {

  const { title, date, url } = cardObj
  const [isClick, setClick] = useState(false);

  console.log(url)
  return (
    <>
      {url.includes('https://apod.nasa.gov/apod/image') ? 
        <div className='card'>
          <div className='cardContent'>
            <img src={url} alt={url} />
            <h2 className="title">{title}</h2>
            <p className="date"><span>Capture date:</span> {date}</p>
          </div>
          <div className="heartContainer">
            <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
          </div>
        </div>
      :
        null
      }  
    </>
  )
}

export default SpaceCards
