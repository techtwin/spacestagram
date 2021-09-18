import React from 'react'

function SpaceCards({ cardObj }) {

  const { title, date, explanation, url } = cardObj

  return (
    <div>
      <div>
        <img src={url} alt='' />
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{explanation}</p>
      </div>
    </div>
  )
}

export default SpaceCards
