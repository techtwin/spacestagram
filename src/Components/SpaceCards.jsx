import React from 'react'

function SpaceCards({ cardObj }) {

  const { title, date, explanation, url } = cardObj

  console.log(url)
  return (
    <>
      {url.includes('https://apod.nasa.gov/apod/image') ? 
        <div className='card'>
          <div className='cardContent'>
            <img src={url} alt={url} />
            <h2 className="title">{title}</h2>
            <p className="date"><span>Capture date:</span> {date}</p>
            <p className="desc">{explanation}</p>
          </div>
        </div>
      :
        null
      }  
    </>
  )
}

export default SpaceCards
