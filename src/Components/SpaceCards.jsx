import React from 'react'

function SpaceCards({ cardObj }) {

  const { title, date, explanation, url } = cardObj

  return (
    <div className='card'>
      <div className='cardContent'>
      <img src={url} alt='' />
        <h2 className="title">{title}</h2>
        <p className="date">{date}</p>
        <p className="desc">{explanation}</p>
      </div>
    </div>
  )
}

export default SpaceCards
